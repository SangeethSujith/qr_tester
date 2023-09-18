import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg'; // Corrected the import path
import './App.css';
import { Html5QrcodeScanner } from 'html5-qrcode';

function App() {
  const [count, setCount] = useState(0);
  const [scanResult, setScanResult] = useState<string | null>(null); 

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', { 
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
      verbose: false,
    });
    function success(result: string) { 
      scanner.clear();
      setScanResult(result);
    }
    function error(err: any) { 
      console.warn(err);
    }
    scanner.render(success, error);
  }, []); 

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {scanResult ? (
        <div>
          Success: <a href={scanResult}>{scanResult}</a>
        </div>
      ) : (
        <div id="reader"></div>
      )}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
