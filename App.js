// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SeatingLayoutComponent from './components/SeatingLayoutComponent';
import SelectionComponent from './components/SelectionComponent';
import ProceedButtonComponent from './components/ProceedButtonComponent';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <SeatingLayoutComponent />
          <SelectionComponent />
          <ProceedButtonComponent />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;


