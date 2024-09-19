import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import NavBar from "./pages/NavBar";
import Profile from "./pages/Profile";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Jesus");

  const client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ username, setUsername }}>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
