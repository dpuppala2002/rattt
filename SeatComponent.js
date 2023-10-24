// components/SeatComponent.js

import React from 'react';

const SeatComponent = ({ seat }) => {
  const { status, type } = seat;

  return (
    <div className="seat">
      <span className={status}>{status}</span>
      <span className={type}>{type}</span>
    </div>
  );
};

export default SeatComponent;
