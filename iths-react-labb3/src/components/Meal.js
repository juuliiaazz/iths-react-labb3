// Varje recept i recept-listan med bild, titel och knapp

import Link from "next/link";
import { ListImage, ListTitle, MealLists } from "@/ui/List";
import { Button } from "@/ui/Button";

export default function Meal({ meal }) {
  return (
    <MealLists>
      <ListImage src={meal.strMealThumb}></ListImage>
      <ListTitle>{meal.strMeal}</ListTitle>
      <div>
        <Link href={"/recipes/" + meal.idMeal} key={meal.idMeal}>
          <Button type="button">View recipe</Button>
        </Link>
      </div>
    </MealLists>
  );
}
