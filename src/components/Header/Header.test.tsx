import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header.tsx";
import "@testing-library/jest-dom";

describe("Header component", () => {
  test("should render ok", () => {
    render(<Header />);
    screen.getByText(/stockbook/i);
    expect(screen.getByRole("img")).toHaveAttribute("src");
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Stockbook Logo");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/stockbook/i);
  });
});
