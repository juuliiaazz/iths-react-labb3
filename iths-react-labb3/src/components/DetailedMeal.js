import React from "react";
import { WaveOne } from "./Wave";
import {
  DetailsMealContainer,
  DetailsMealTitle,
  DetailsParagraph,
  ImageMeal,
  ImageMealBox,
  InfoMealCard,
  IngredientsBox,
  InstructionsBox,
  Tag,
  TagList,
} from "@/ui/DetailsMeal";

// Detaljer för varje recept med titel, bild, ingredienser och instruktioner

export default function DetailedMeal({ meal }) {
  let ingredients = [];
  let measures = [];

  Object.keys(meal)
    .map((key) => meal[key])
    .slice(9, 29)
    .forEach((item, index) => {
      if (item) {
        ingredients.push(item);
        measures.push(
          Object.keys(meal)
            .map((key) => meal[key])
            .slice(29, 49)[index]
        );
      }
    });

  return (
    <>
      <DetailsMealContainer key={meal.idMeal}>
        <DetailsMealTitle>{meal.strMeal}</DetailsMealTitle>

        <ImageMealBox>
          <InfoMealCard>
            <ImageMeal src={meal.strMealThumb}></ImageMeal>
          </InfoMealCard>
          <InfoMealCard>
            <IngredientsBox>
              <h1>Ingredients:</h1>
              <TagList>
                {ingredients.map((item, index) => (
                  <Tag key={`${item}-${index}`}>
                    <b>{item}:</b> {measures[index]}
                  </Tag>
                ))}
              </TagList>
            </IngredientsBox>
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
