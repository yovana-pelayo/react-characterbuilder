import React, { useState } from 'react';
import SelectPart from '../components/Selector/Selector';
import Body from '../components/Body/Body';

export default function Home() {
  const [head, setHead] = useState('rock');
  const [top, setTop] = useState('shredded');
  const [pants, setPants] = useState('jeans');

  // const [top, setTop] = useState('');
  return (
    <div>
      <SelectPart
        head={head}
        setHead={setHead}
        top={top}
        setTop={setTop}
        pants={pants}
        setPants={setPants}
      />
      <Body head={head} top={top} pants={pants} />
    </div>
  );
}
// move to a head component
