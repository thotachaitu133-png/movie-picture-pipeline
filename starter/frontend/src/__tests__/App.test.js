import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Movie Picture application", () => {
  render(<App />);

  const moviePictureElements = screen.getAllByText("Movie Picture");

  expect(moviePictureElements.length).toBeGreaterThan(0);
});
