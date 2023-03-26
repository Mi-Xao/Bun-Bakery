import './App.css'
import React from 'react'

import {BrowserRouter} from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes.js'

function App() {
  return (
    <div className="App">
      <header>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
