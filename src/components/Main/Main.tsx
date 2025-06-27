import { useState } from 'react';
import './Main.css';

function Main() {
    const [count, setCount] = useState(0);

  return (
    <main>
      <div className="card">
        stocks here...
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
