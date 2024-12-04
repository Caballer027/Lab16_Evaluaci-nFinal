import React from 'react';
import './App.css';
import ListProductoComponent from './components/ListProductoComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponents from './components/FooterComponents';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProductoComponent from './components/AddProductoComponent';
import ListCategoriaComponent from './components/ListCategoriaComponent';
import AddCategoriaComponent from './components/AddCategoriaComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListProductoComponent />} />
            <Route path="/productos" element={<ListProductoComponent />} />
            <Route path="/add-producto" element={<AddProductoComponent />} />
            <Route path="/edit-producto/:id" element={<AddProductoComponent />} />
            <Route path="/categorias" element={<ListCategoriaComponent />} />
            <Route path="/add-categoria" element={<AddCategoriaComponent />} />
            <Route path="/edit-categoria/:id" element={<AddCategoriaComponent />} />
          </Routes>
        </div>
        <FooterComponents />
      </BrowserRouter>
    </div>
  );
}

export default App;
