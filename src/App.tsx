import { HackerNewsProvider } from "./Contexts/hackerNewsContext";
import { HashRouter as Router } from "react-router-dom";

import { AppRoutes } from "./Routes/routes";
import Header from "./Components/Header/header";

const App = () => {
  return (
    <HackerNewsProvider>
      <Router>
        <Header title="Hacker News" />
        <AppRoutes />
      </Router>
    </HackerNewsProvider>
  );
};

export default App;
