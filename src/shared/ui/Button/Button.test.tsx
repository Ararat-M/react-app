import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("Button", () => {
  render(<Button>Test</Button>);
  expect(screen.getByText("Test")).toBeInTheDocument();
});