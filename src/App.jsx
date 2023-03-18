import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { Footer } from './components/footer/footer';
import { About } from './pages/about/about';
import { Cottages } from './pages/cottages/cottages';
import { Contacts } from './pages/contacts/contacts';
import { Price } from './pages/price/price';
import { Cottage } from './pages/cottage/cottage';
import { Checkout } from './pages/checkout/checkout';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/index.html" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cottages" element={<Cottages />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/price" element={<Price />} />
        <Route path="/cottage/:id" element={<Cottage />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
