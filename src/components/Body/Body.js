import React from 'react';

export default function Body({ head, top, pants }) {
  return (
    <div className="body">
      <div className="head">
        <img src={`${process.env.PUBLIC_URL}/images/${head}-head.jpeg`} />
      </div>
      <div className="top">
        <img src={`${process.env.PUBLIC_URL}/images/${top}-top.jpeg`} />
      </div>
      <div className="pants">
        <img src={`${process.env.PUBLIC_URL}/images/${pants}-pants.jpeg`} />
      </div>
    </div>
  );
}
