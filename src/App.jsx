import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Html5QrcodeScanner } from 'html5-qrcode'

function App() {
  const [count, setCount] = useState(0)
  const [scanResult,setScanResult]=useState(null)
  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
    function success(result) {
      scanner.clear();
      setScanResult(result);
    }
    function error(err) {
      console.warn(err);
    }
    scanner.render(success, error);
  }, []);
  return (
    <>
      {scanResult ? (
        <div>
          Success: <a href={scanResult}>{scanResult}</a>
        </div>
      ) : (
        <div id="reader"></div>
      )}
      <script src="https://unpkg.com/html5-qrcode" type="text/javascript"></script>
    </>
  )
}

export default App
