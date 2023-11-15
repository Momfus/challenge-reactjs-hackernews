import "./App.css";
import { HackerNewsProvider } from "./Context/hackerNewsContext";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./Routes/routes";
import Header from "./Component/Header/header";

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
