import React from 'react';

export default function Catchphrases({ setPickUpLine, pickUpLine, setPickUpLines, pickUpLines }) {
  const savePickUpLine = () => {
    setPickUpLines((prevState) => [...prevState, pickUpLine]);
    setPickUpLine('');
  };
  return (
    <div>
      <input value={pickUpLine} type="text" onChange={(e) => setPickUpLine(e.target.value)} />
    </div>
  );
}
