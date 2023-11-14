import React from "react";
import "./App.css";
import { HackerNewsProvider } from "./Contexts/hackerNewsContext";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/header";
import { AppRoutes } from "./Routes/routes";

function App() {
  return (
    <HackerNewsProvider>
      <BrowserRouter>
        <Header title="Hacker News" />
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </HackerNewsProvider>
  );
}

export default App;
