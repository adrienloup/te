import { useState } from 'react';
import teLogo from '/te.svg';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <img src={teLogo} className="logo" alt="Vite logo" />

      <h1>te</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
