import React from "react";
import { IngredientsBox, Tag, TagList } from "@/ui/DetailsMeal";

export default function Ingredients({ meal }) {
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
  );
}
