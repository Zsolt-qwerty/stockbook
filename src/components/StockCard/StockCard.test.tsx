import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import StockCard from "./StockCard.tsx";
import { CompanyProfile2Data, QuoteData } from "finnhub";
import "@testing-library/jest-dom";

// Mock the custom hook
vi.mock("../../hooks/useStockData.ts", () => ({
  useStockData: vi.fn(),
}));

import { useStockData } from "../../hooks/useStockData.ts";

const mockUseStockData = vi.mocked(useStockData);

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
    mockUseStockData.mockReturnValue({
      companyProfile2Data: mockData.companyProfile2Data,
      stockQuoteData: mockData.stockQuoteData,
      isLoading: false,
      error: null,
    });

    render(<StockCard ticker="AAPL" />);
  });

  test("should render as clickable when onClick is provided", () => {
    mockUseStockData.mockReturnValue({
      companyProfile2Data: mockData.companyProfile2Data,
      stockQuoteData: mockData.stockQuoteData,
      isLoading: false,
      error: null,
    });

    const mockClick = vi.fn();
    render(<StockCard ticker="AAPL" onClick={mockClick} />);
    
    const card = screen.getByRole("button");
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("clickable");
  });

  test("should render as selected when isSelected is true", () => {
    mockUseStockData.mockReturnValue({
      companyProfile2Data: mockData.companyProfile2Data,
      stockQuoteData: mockData.stockQuoteData,
      isLoading: false,
      error: null,
    });

    render(<StockCard ticker="AAPL" isSelected={true} />);
    
    const card = screen.getByText("Apple Inc.").closest('.card');
    expect(card).toHaveClass("selected");
  });

  test("should display data from companyProfile2Data", () => {
    mockUseStockData.mockReturnValue({
      companyProfile2Data: mockData.companyProfile2Data,
      stockQuoteData: mockData.stockQuoteData,
      isLoading: false,
      error: null,
    });

    render(<StockCard ticker="AAPL" />);
    screen.getByText("Apple Inc.");
    screen.getByText("AAPL");
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Logo of Apple Inc.");
  });

  test("should display data from stockQuoteData", () => {
    mockUseStockData.mockReturnValue({
      companyProfile2Data: mockData.companyProfile2Data,
      stockQuoteData: mockData.stockQuoteData,
      isLoading: false,
      error: null,
    });

    render(<StockCard ticker="AAPL" />);
    screen.getByText("$150.00");
    screen.getByText("+1.50 (1.01%)");
  });

  test("should display loading state", () => {
    mockUseStockData.mockReturnValue({
      companyProfile2Data: {} as CompanyProfile2Data,
      stockQuoteData: {} as QuoteData,
      isLoading: true,
      error: null,
    });

    render(<StockCard ticker="AAPL" />);
    screen.getByText("Loading AAPL...");
  });

  test("should call onClick when clicked", () => {
    mockUseStockData.mockReturnValue({
      companyProfile2Data: mockData.companyProfile2Data,
      stockQuoteData: mockData.stockQuoteData,
      isLoading: false,
      error: null,
    });

    const mockClick = vi.fn();
    render(<StockCard ticker="AAPL" onClick={mockClick} />);
    
    const card = screen.getByRole("button");
    fireEvent.click(card);
    
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  test("should display error state", () => {
    mockUseStockData.mockReturnValue({
      companyProfile2Data: {} as CompanyProfile2Data,
      stockQuoteData: {} as QuoteData,
      isLoading: false,
      error: "API Error",
    });

    render(<StockCard ticker="AAPL" />);
    screen.getByText("Error loading AAPL: API Error");
  });
});
