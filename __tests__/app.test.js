import React from "react";
import Home from "../pages/index.tsx";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../store";

test("Home component renders with initial header text of 'The value of counter is 0'", () => {
  const component = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const headerEl = component.getByTestId("header");

  expect(headerEl).toBeVisible();
  expect(headerEl.textContent).toBe("The value of counter is 0");
});
