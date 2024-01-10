import Meal from "@/components/Meal";
import GlobalStyles from "@/styles/GlobalStyles";
import React from "react";

// sida för lista med recept

export async function getStaticProps() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
  );
  const result = await res.json();

  return {
    props: {
      listOfMeals:
        result && result.meals && result.meals.length > 0 ? result.meals : [],
    },
  };
}

export default function RecipeList({ listOfMeals }) {
  return (
    <>
      <GlobalStyles />
      <div>
        <h1>All Recipes</h1>
        <ul>
          {listOfMeals?.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </ul>
      </div>
    </>
  );
}
