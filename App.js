import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContextProvider, useAuth } from './context/AuthContext'; // Cambiado a AuthContextProvider
import Navbar from './components/Navbar';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './App.css';

function App() {
  return (
    <Router>
      <AuthContextProvider> {/* Cambiado aquí */}
        <div className="app">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<PrivateRoute><ProductList /></PrivateRoute>} />
              <Route path="/products/new" element={
                <PrivateRoute role="admin"><ProductForm /></PrivateRoute>
              } />
              <Route path="/products/edit/:id" element={
                <PrivateRoute role="admin"><ProductForm /></PrivateRoute>
              } />
            </Routes>
          </div>
        </div>
      </AuthContextProvider> {/* Cambiado aquí */}
    </Router>
  );
}

function PrivateRoute({ children, role }) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }
  
  return children;
}

export default App;