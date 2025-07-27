import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer.tsx";
import "@testing-library/jest-dom";

describe("Footer component", () => {
  test("should render without crashing", () => {
    render(<Footer />);
    screen.getByText(/stockbook/i);
    expect(screen.getByRole("img", { name: /vite/i })).toHaveAttribute("src");
    expect(screen.getByRole("img", { name: /react/i })).toHaveAttribute("src");
    expect(screen.getByRole("contentinfo")).toHaveTextContent(/stockbook/i);
  });
});
