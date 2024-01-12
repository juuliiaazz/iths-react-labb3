import React from "react";
import { WaveOne } from "./Wave";
import {
  DetailsMealContainer,
  DetailsMealTitle,
  DetailsParagraph,
  ImageMeal,
  ImageMealBox,
  InfoMealCard,
  InstructionsBox,
} from "@/ui/DetailsMeal";
import Ingredients from "./Ingredients";

// Detaljer för varje recept med titel, bild, ingredienser och instruktioner

export default function DetailedMeal({ meal }) {
  return (
    <>
      <DetailsMealContainer key={meal.idMeal}>
        <DetailsMealTitle>{meal.strMeal}</DetailsMealTitle>

        <ImageMealBox>
          <InfoMealCard>
            <ImageMeal src={meal.strMealThumb}></ImageMeal>
          </InfoMealCard>
          <InfoMealCard>
            <Ingredients meal={meal} />
          </InfoMealCard>
          <WaveOne />
        </ImageMealBox>

        <InstructionsBox>
          <h1>Instructions:</h1>
          <DetailsParagraph>{meal.strInstructions}</DetailsParagraph>
        </InstructionsBox>
      </DetailsMealContainer>
    </>
  );
}
