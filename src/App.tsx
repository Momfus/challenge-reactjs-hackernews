import "./App.css";
import { HackerNewsProvider } from "./Contexts/hackerNewsContext";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./Routes/routes";
import Header from "./Components/Header/header";

function App() {
  return (
    <HackerNewsProvider>
      <BrowserRouter>
        <Header title="Hacker News" />

        <div className="app-routes">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </HackerNewsProvider>
  );
}

export default App;
