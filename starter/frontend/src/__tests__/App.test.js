import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Movie Picture", () => {
  render(<App />);
  expect(screen.getByText("Movie Picture")).toBeInTheDocument();
});
