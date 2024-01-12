import GlobalStyles from "../../../styles/GlobalStyles";
import { useRouter } from "next/router";
import { MainDiv } from "../../../ui/Main";
import { Button } from "../../../ui/Button";
import { DetailsMealNav } from "../../../ui/DetailsMeal";
import NavBar from "../../../components/NavBar";
import DetailedMeal from "../../../components/DetailedMeal";

// sida för recept-detaljer

export async function getStaticPaths() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
  );
  const result = await res.json();

  const paths = result.meals.map((meals) => {
    return {
      params: { recipeDetails: meals.idMeal.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const recipeDetails = context.params.recipeDetails;
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipeDetails
  );
  const result = await res.json();

  return {
    props: {
      meals:
        result && result.meals && result.meals.length > 0 ? result.meals : [],
    },
  };
}

export default function RecipeDetails({ meals }) {
  const router = useRouter();

  return (
    <>
      <GlobalStyles />
      <NavBar />
      <MainDiv>
        <DetailsMealNav>
          <Button type="back" onClick={() => router.back()}>
            &larr;
          </Button>
        </DetailsMealNav>

        <div>
          {meals?.map((meal) => (
            <DetailedMeal key={meal.idMeal} meal={meal}></DetailedMeal>
          ))}
        </div>
      </MainDiv>
    </>
  );
}
