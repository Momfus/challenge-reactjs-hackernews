import "./App.css";
import { HackerNewsProvider } from "./Contexts/hackerNewsContext";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./Route/routes";
import Header from "./Components/Header/header";

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
