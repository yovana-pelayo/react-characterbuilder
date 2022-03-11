import React, { useState } from 'react';
import SelectPart from '../Selector/Selector';

export default function Home() {
  const [head, setHead] = useState('rock');
  return (
    <div>
      <SelectPart head={head} setHead={setHead} />
      {head}
      <img src={`${process.env.PUBLIC_URL}/images/${head}-head.jpeg`} />
    </div>
  );
}
// move to a head component
