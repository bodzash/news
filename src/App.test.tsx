import "./setupTests";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should display text", () => {
    // Arrange
    render(<App />);

    // Act
    expect(screen.getByText("App")).toBeInTheDocument();
  });
});
