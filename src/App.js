import React from 'react'
import './App.css';
import {useCart} from './providers/context'
import Products from './components/list-products/products'
import Navbar from './components/nav-bar/navbar';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      
    </div>
  );
}

export default App;
