import React from 'react';
import './App.css';
import BaseRoute from './apps/BaseRoute';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <BaseRoute/>
    </BrowserRouter>
  );
}

export default App;
