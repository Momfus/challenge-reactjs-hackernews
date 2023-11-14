import React from "react";
import "./App.css";
import { FavoritesProvider } from "./Contexts/favoritesContext";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/header";
import { AppRoutes } from "./Routes/routes";

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Header title="Hacker News" />
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
