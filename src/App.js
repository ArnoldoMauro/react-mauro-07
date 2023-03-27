import React from 'react';
import BootstrapNavbar from './components/BootstrapNavbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
    <><>
    </><BrowserRouter>
        
        <BootstrapNavbar /> 
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorys/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>Error 404 - Page not found</h2>} />
        </Routes>
      </BrowserRouter></>
    
  )
}

export default App

