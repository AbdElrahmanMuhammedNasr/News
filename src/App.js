import React from 'react';
import './App.css';
import Container from "./Container/Container";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Container />
        </BrowserRouter>
    </div>
  );
}

export default App;
