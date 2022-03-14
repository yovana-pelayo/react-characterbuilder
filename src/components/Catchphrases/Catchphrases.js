import React from 'react';
import './Catchphrases';

export default function Catchphrases({ setPickupLine, pickupLine, setPickupLines, pickupLines }) {
  const savePickupLine = () => {
    setPickupLines((prevState) => [...prevState, pickupLine]);
    setPickupLine('');
  };
  return (
    <div>
      <input value={pickupLine} type="text" onChange={(e) => setPickupLine(e.target.value)} />
      <button className="button" onClick={savePickupLine}>
        Save Pickup Line
      </button>
      <ul>
        {pickupLines.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
    // created an input box
    //created button that saves text in box
  );
}
