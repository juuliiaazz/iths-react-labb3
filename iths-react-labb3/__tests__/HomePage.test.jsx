import { render, screen } from "@testing-library/react";
import HomePage from "../src/pages";

describe("HomePage - Rendering", () => {
  it("should have button with text Browse through our recipes", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("button", { name: "Browse through our recipes" })
    ).toBeInTheDocument();
  });
});
