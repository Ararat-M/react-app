import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import { StoreProvider } from "app/providers/storeProvider";

describe("Counter", () => {
  test("click increment button", () => {
    render(
      <StoreProvider initialState={{ counter: { value: 10 } }}>
        <Counter />
      </StoreProvider>
    );

    fireEvent.click(screen.getByTestId("incrementBtn"));

    expect(screen.getByTestId("value")).toHaveTextContent("value: 11");
  });

  test("click decrement button", () => {
    render(
      <StoreProvider initialState={{ counter: { value: 10 } }}>
        <Counter />
      </StoreProvider>
    );

    fireEvent.click(screen.getByTestId("decrementBtn"));

    expect(screen.getByTestId("value")).toHaveTextContent("value: 9");
  });
});
