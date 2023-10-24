// components/SeatingLayoutComponent.js

import React, { useState, useEffect } from 'react';
import SeatComponent from './SeatComponent';

const SeatingLayoutComponent = () => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    // Fetch all seats from the backend
    fetch('/seats')
      .then(response => response.json())
      .then(data => setSeats(data));
  }, []);

  return (
    <div className="seating-layout">
      {seats.map(seat => (
        <SeatComponent key={seat.id} seat={seat} />
      ))}
    </div>
  );
};

export default SeatingLayoutComponent;
