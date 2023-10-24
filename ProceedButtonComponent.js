// components/ProceedButtonComponent.js

import React, { useState } from 'react';

const ProceedButtonComponent = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <button
      className="proceed-button"
      onClick={() => {
        // Send the selected seats to the backend to book them
        fetch('/seats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(selectedSeats),
        })
          .then(response => response.json())
          .then(data => {
            // Handle the response from the backend
          });
      }}
    >
      Proceed
    </button>
  );
};

export default ProceedButtonComponent;
