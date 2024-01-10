import Meal from "@/components/Meal";
import { Pagination } from "@/components/Pagination";
import GlobalStyles from "@/styles/GlobalStyles";
import React, { useRef, useState } from "react";

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
  const [currentPage, setCurrentPage] = useState(1);

  const postPerPage = 10;

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = listOfMeals.slice(firstPostIndex, lastPostIndex);

  const totalPages = Math.ceil(listOfMeals.length / postPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <GlobalStyles />
      <div>
        <h1>All Recipes</h1>
        <ul>
          {currentPosts?.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </ul>
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
