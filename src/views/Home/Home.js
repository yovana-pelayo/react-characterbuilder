import React, { useState } from 'react';
import SelectPart from '../../components/Selector/Selector';
import Body from '../../components/Body/Body';
import background from '../../background.jpeg';
import Catchphrases from '../../components/Catchphrases/Catchphrases';

export default function Home() {
  const [head, setHead] = useState('rock');
  const [top, setTop] = useState('shredded');
  const [pants, setPants] = useState('jeans');
  const [pickUpLine, setPickUpLine] = useState('');
  const [pickUpLines, setPickUpLines] = useState('');
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <SelectPart
        head={head}
        setHead={setHead}
        top={top}
        setTop={setTop}
        pants={pants}
        setPants={setPants}
      />
      <Body head={head} top={top} pants={pants} />
      <Catchphrases
        pickUpLine={pickUpLine}
        setPickUpLine={setPickUpLine}
        pickUpLines={pickUpLines}
        setPickUpLines={setPickUpLines}
      />
    </div>
  );
}
// move to a head component
