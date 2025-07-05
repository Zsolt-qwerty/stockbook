import { useState, useEffect } from 'react';
import { ApiClient, DefaultApi, QuoteData } from 'finnhub';
import './Main.css';
import { getEnvVariableOrThrow } from '../../utils/getEnvVariableOrThrow';

function Main() {
  const [count, setCount] = useState(0);
  const [stockData, setStockData] = useState({} as QuoteData);

  useEffect(() => {
    // This effect runs once when the component mounts
    console.log('Component mounted');

    const api_key = ApiClient.instance.authentications['api_key'];
    api_key.apiKey = getEnvVariableOrThrow('VITE_FINNHUB_TOKEN');
    const finnhubClient = new DefaultApi();

    const ticker: string = "AAPL"; // Example ticker symbol, can be changed to any valid symbol
    finnhubClient.quote(ticker, (error: Error | null, data: QuoteData, response: unknown) => {
      if (error) {
        console.error('API Error:', error);
        return;
      }
      console.log('Quote data:', data);
      setStockData(data);
      console.log('API response:', response);
    });

    // Uncomment the following lines to enable WebSocket connection
    // const token = import.meta.env.VITE_FINNHUB_TOKEN;
    // if (!token) {
    //   console.error('VITE_FINNHUB_TOKEN is not set in environment variables');
    //   return;
    // }
    // const socket = new WebSocket(`wss://ws.finnhub.io?token=${token}`);

    // // Connection opened -> Subscribe
    // socket.addEventListener('open', function () { // can add (event) if needed
    //   console.log('WebSocket connection opened');
    //   socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
    //   socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
    //   socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'IC MARKETS:1'}))
    // });

    // // Listen for messages
    // socket.addEventListener('message', function (event) {
    //   console.log('Message from server ', event.data);
    // });

    // // // Unsubscribe
    // // const unsubscribe = function(symbol) {
    // //   socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
    // // };

    // // Cleanup function
    // return () => {
    //   console.log('Component unmounted');
    //   socket.close();
    // };
  }, []);

  return (
    <main>
      <div className="card">
        Apple: ${stockData.c} {stockData.d} ({stockData.dp}%)
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </main>
  );
}

export default Main;
