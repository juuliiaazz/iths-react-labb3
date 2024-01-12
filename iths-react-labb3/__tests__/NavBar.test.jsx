import { render, screen } from "@testing-library/react";
import NavBar from "../src/components/NavBar";

describe("NavBar - Rendering", () => {
  it("should have title Recipes", () => {
    render(<NavBar />);
    screen.getByText("Recipes");
  });
});
