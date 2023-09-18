import { useEffect, useState } from 'react'
import { Html5Qrcode } from 'html5-qrcode'

const Scanner = () => {
    const [scanResult,setScanResult]=useState(null)
  useEffect(() => {
    const scanner = new Html5Qrcode('qrreader', {
      
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 10,
      facingMode:{id:1}
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
  if(scanResult){
    return(
      <div>
        Success:<a href={scanResult}>{scanResult}</a>
      </div>
    )
  }
  else{
    return <div id='qrreader'>

    </div>
  }
  //   {scanResult?(
  //       <div>
  //         Success: <a href={scanResult}>{scanResult}</a>
  //       </div>
  //     ):(
  //       <div id="reader"></div>
  //     )}

}

export default Scanner