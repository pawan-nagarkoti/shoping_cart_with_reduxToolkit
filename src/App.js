import React from 'react';
import AddToCart from './component/AddToCart';
import Navigation from './component/Navigation';
import { Route, Routes } from "react-router-dom"
import Home from './component/Home';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addtocart" element={<AddToCart />} />
      </Routes>
    </>
  )
}

export default App