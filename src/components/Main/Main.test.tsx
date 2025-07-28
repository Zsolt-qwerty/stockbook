import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Main from "./Main.tsx";
import "@testing-library/jest-dom";

describe("Main component", () => {
  test("should render ok", () => {
    render(<Main />);
    screen.getByText(/latest/i);
    expect(screen.getByRole("main")).toHaveTextContent(/news/i);
  });
});
