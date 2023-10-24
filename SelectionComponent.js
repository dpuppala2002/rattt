// components/SelectionComponent.js

import React, { useState } from 'react';

const SelectionComponent = () => {
  const [seatType, setSeatType] = useState('');
  const [seatCount, setSeatCount] = useState(0);

  return (
    <div className="selection-component">
      <select value={seatType} onChange={e => setSeatType(e.target.value)}>
        <option value="">Select seat type</option>
        <option value="economy">Economy</option>
        <option value="business">Business</option>
        <option value="first class">First class</option>
      </select>
      <input type="number" value={seatCount} onChange={e => setSeatCount(e.target.value)} />
    </div>
  );
};

export default SelectionComponent;
