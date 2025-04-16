import React from 'react';
import Contact from './contact.jsx';
import Product from './product.jsx';
import Data from './users.jsx';
import Delete from './delete.jsx'
import { Route, Routes, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
  };

  return (
    <div style={backgroundStyle}>
      <h1>
        <span className="scroll-text">Welcome to the Dashboard</span>
      </h1>
      <button onClick={() => navigate('/dashboard/contact')}>Contact</button>
      <button onClick={() => navigate('/dashboard/product')}>Product</button>
      <button onClick={() => navigate('/dashboard/users')}>Users</button>
      <button onClick={() => navigate('/dashboard/delete')}>Delete</button>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/users" element={<Data />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </div>
  );
}
