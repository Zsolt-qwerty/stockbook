import { describe, test, expect } from "vitest";
import getCurrencySymbol from "./getCurrencySymbol.ts";

describe("getCurrencySymbol()", () => {
  test("should return the correct symbol for USD", () => {
    expect(getCurrencySymbol("USD")).toBe("$");
  });

  test("should return the correct symbol for EUR", () => {
    expect(getCurrencySymbol("EUR")).toBe("€");
  });

  test("should return the correct symbol for GBP", () => {
    expect(getCurrencySymbol("GBP")).toBe("£");
  });

  test("should return the correct symbol for JPY", () => {
    expect(getCurrencySymbol("JPY")).toBe("¥");
  });

  test("should return the correct symbol for INR", () => {
    expect(getCurrencySymbol("INR")).toBe("₹");
  });

  test("should return the currency code for unknown currencies", () => {
    expect(getCurrencySymbol("ABC")).toBe("ABC ");
  });
});
