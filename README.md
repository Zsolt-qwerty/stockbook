# stockbook

A modern, responsive stock market tracker built with React and TypeScript. `stockbook` provides real-time stock prices, company information, and latest news for major publicly traded companies.

![stockbook Banner](./public/icons8-stock-market-96.png)

## 🚀 Features

- **Real-time Stock Data**: Get live stock prices and market data
- **Latest News**: Stay updated with the most recent company news
- **Interactive UI**: Clean, responsive design with easy navigation
- **TypeScript Support**: Fully typed codebase for better development experience

## 🏗️ Tech Stack

- **Frontend**: React 19.1.0 with TypeScript
- **Build Tool**: Vite 7.0.6
- **Styling**: CSS3 with custom styles
- **Testing**: Vitest with React Testing Library
- **Linting**: ESLint with TypeScript support
- **API**: Finnhub Stock API
- **Deployment**: GitHub Pages
- **Error Tracking**: Sentry integration

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Zsolt-qwerty/stockbook.git
   cd stockbook
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add your Finnhub API key:

   ```env
   VITE_FINNHUB_TOKEN=your_finnhub_api_key_here
   ```

   Get a free API key at [finnhub.io](https://finnhub.io)

## 🚀 Usage

### Development

Start the development server:

```bash
npm run dev
```

### Testing

Run the test suite:

```bash
npm test
```

Run tests with coverage:

```bash
npm run test:coverage
```

### Linting

Check for code style issues:

```bash
npm run lint
```

### Type Checking

Run TypeScript type checking:

```bash
npm run type-check
```

## 📖 How It Works

### Stock Data Flow

1. **Stock Selection**: Users can select from a list of popular stocks (AAPL, TSLA, GOOGL, etc.)
2. **Data Fetching**: The app uses custom React hooks to fetch data from the Finnhub API:
   - `useStockData`: Fetches company profile and real-time quotes
   - `useCompanyNews`: Fetches latest company news
3. **Display**: Data is displayed in organized cards showing stock information and news

### Component Structure

```
App
├── Header - Application header with branding
├── Main - Main content area
│   ├── StockCard - Individual stock ticker cards
│   ├── InfoCard - Detailed company information
│   └── NewsCard - Latest company news
└── Footer - Application footer
```

## 🧪 Testing

The project includes comprehensive testing setup:

- **Unit Tests**: Component testing with React Testing Library
- **Test Coverage**: Coverage reports with Vitest
- **Test Environment**: jsdom for DOM simulation

## 🚀 Deployment

The project is configured for deployment to GitHub Pages:

**Visit**: [https://zsolt-qwerty.github.io/stockbook/](https://zsolt-qwerty.github.io/stockbook/)

## 📁 Project Structure

```
stockbook/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── tests/                  # Test configuration
├── package.json            # Project dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── eslint.config.js        # ESLint configuration
```

## 🔗 API Integration

This application integrates with the [Finnhub Stock API](https://finnhub.io) to provide:

- Real-time stock prices
- Company profiles and financial data
- Latest company news and market updates

### API Endpoints Used

- `/stock/profile2` - Company profile information
- `/quote` - Real-time stock quotes
- `/company-news` - Company news articles

## 🔧 Expanding the ESLint configuration

It is recommended updating the configuration to enable type-aware lint rules when developing a production application:

```js
// eslint.config.js

export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes with tests on your branch
4. Submit a pull request

### Development Guidelines

- Follow the existing code style and linting rules
- Write tests for new features
- Ensure all tests pass before submitting
- Update documentation as needed

## 🐛 Troubleshooting

### Common Issues

1. **API Key Error**: Ensure your `VITE_FINNHUB_TOKEN` is correctly set in the `.env` file
2. **CORS Issues**: The Finnhub API should work directly from the browser, but if you encounter CORS issues, check your API key and usage limits
3. **Build Errors**: Run `npm run type-check` to identify TypeScript issues

### Getting Help

- Check the [Issues](https://github.com/Zsolt-qwerty/stockbook/issues) page for known problems
- Create a new issue if you encounter a bug
- Review the Finnhub API [documentation](https://finnhub.io) for API-related questions

## 📄 License

This project is open source and available for personal use only.

## 🙏 Acknowledgments

- [Finnhub](https://finnhub.io) for providing the stock market API
- [React](https://reactjs.org) team for the excellent framework
- [Vite](https://vitejs.dev) for the fast build tool
- [Icons8](https://icons8.com) for the stock market icons

## 📈 Roadmap

- [ ] Historical data visualization (graphs)
- [ ] Price updates by use of websockets
- [ ] Add a stock search feature
- [ ] Watchlist and settings saved locally
- [ ] Add more stock exchanges (international markets)
- [ ] Implement portfolio tracking
- [ ] Real-time price alerts
- [ ] Add charts and technical analysis
- [ ] Light/Dark mode toggle switch
- [ ] Mobile app version

---

**Happy Trading! 📊**

> Disclaimer: This application is for educational and informational purposes only. It should not be considered as financial advice. Always do your own research before making investment decisions.
