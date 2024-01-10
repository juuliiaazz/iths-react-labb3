import React from "react";

// Detaljer för varje recept med titel, bild, ingredienser och instruktioner

export default function DetailedMeal({ meal }) {
  return (
    <div key={meal.idMeal}>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb}></img>
      <p>{meal.strInstructions}</p>
    </div>
  );
}
