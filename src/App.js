import React from 'react';
import { createContext } from 'react';
import BootstrapNavbar from './components/BootstrapNavbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';

const cartContext = createContext ({text: "hola"})

function App() {
  const CartProvider = cartContext.Provider;
  let cart = [];

  return (
    /* Provider */
    <CartProvider value = {{ cart: cart }} >

    <><>
    </><BrowserRouter>
        
        <BootstrapNavbar /> 
        <br /> <br /><br /> <br /><br />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorys/:categoryid" element={<ItemListContainer />} />

          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>Error 404 - Page not found</h2>} />
        </Routes>
      </BrowserRouter></>
      </CartProvider>
  )
}
export {cartContext}; 
export default App;
