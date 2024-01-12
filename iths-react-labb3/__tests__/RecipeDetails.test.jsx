import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import RecipeDetails from "../src/pages/recipes/[recipeDetails]";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("back-button with the name ←", () => {
  useRouter.mockReturnValue({
    events: {
      back: () => {},
    },
  });
  render(<RecipeDetails />);
  expect(useRouter).toHaveBeenCalled();
  expect(screen.getByRole("button", { name: "←" })).toBeInTheDocument();
});
