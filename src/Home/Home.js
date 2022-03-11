import React, { useState } from 'react';
import SelectPart from '../components/Selector/Selector';
import Body from '../components/Body/Body';

export default function Home() {
  const [head, setHead] = useState('rock');
  const [top, setTop] = useState('shredded');
  // const [top, setTop] = useState('');
  return (
    <div>
      <SelectPart head={head} setHead={setHead} top={top} setTop={setTop} />
      <Body head={head} top={top} />
    </div>
  );
}
// move to a head component
