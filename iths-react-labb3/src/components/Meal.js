// Varje recept i recept-listan med bild, titel och knapp

import Link from "next/link";

export default function Meal({ meal }) {
  return (
    <div>
      <img src={meal.strMealThumb}></img>
      <h1>{meal.strMeal}</h1>
      <Link href={"/recipes/" + meal.idMeal} key={meal.idMeal}>
        <button>View recipe</button>
      </Link>
    </div>
  );
}
