import React, { useEffect, useState } from "react";

const Loader = () => {
  const greeting = ["안녕, 만나서 반가워요.", "Nice To Meet You."];
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
        <div>
          This Website is optimized for laptop/tablet screen.
        </div>
      )}
    </>
  )
}

export default Loader;