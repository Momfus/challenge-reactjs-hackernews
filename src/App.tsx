import React from 'react';
import './App.css';
import { FavoritesProvider } from './contexts/favoritesContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <h1>Test</h1>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
