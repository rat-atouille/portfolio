import React, { useEffect, useState } from "react";
import './loader.scss'
import Time from '../assets/bitmap-hourglass.png'
const Loader = () => {
  const [warning, setWarning] = useState(false);

  // display warning if the screen is smaller than tablet size
  useEffect(()=>{
    if (window.innerWidth < 800) {
       setWarning(true);
    }
  }, [])

  return (
    <>
      {warning && (
        <div className="loader">
          <img src={Time}></img>
          <p>This Website is optimized for laptop/tablet screen.</p>
        </div>
      )}
    </>
  )
}

export default Loader;