import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import StockCard from "./StockCard.tsx";
import "@testing-library/jest-dom";

const mockData = {
  companyProfile2Data: {
    country: "USA",
    currency: "USD",
    estimateCurrency: "USD",
    exchange: "NASDAQ",
    finnhubIndustry: "Technology",
    ipo: "1980-12-12",
    logo: "https://example.com/logo.png",
    marketCapitalization: 250000000000,
    name: "Apple Inc.",
    phone: "+1 800 692 7753",
    shareOutstanding: 16000000000,
    ticker: "AAPL",
    weburl: "https://www.apple.com",
  },
  stockQuoteData: {
    c: 150.0,
    d: 1.5,
    dp: 1.01,
    h: 152.0,
    l: 148.0,
    o: 149.0,
    pc: 148.5,
    t: 1752425220,
  },
};

describe("StockCard component", () => {
  test("should render ok", () => {
    render(
      <StockCard
        companyProfile2Data={mockData.companyProfile2Data}
        stockQuoteData={mockData.stockQuoteData}
      />
    );
  });
  test("should display data from companyProfile2Data", () => {
    render(
      <StockCard
        companyProfile2Data={mockData.companyProfile2Data}
        stockQuoteData={mockData.stockQuoteData}
      />
    );
    screen.getByText("Apple Inc.");
    screen.getByText("AAPL");
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Logo of Apple Inc.");
  });
  test("should display data from stockQuoteData", () => {
    render(
      <StockCard
        companyProfile2Data={mockData.companyProfile2Data}
        stockQuoteData={mockData.stockQuoteData}
      />
    );
    screen.getByText("USD150.00");
    screen.getByText("+1.50 (1.01%)");
  });
});
