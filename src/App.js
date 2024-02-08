import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conversations from "./conversations";
import HamburgerMenu from "./components/hamburger/hamburger";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Conversations" element={<Conversations />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Welcome to the Home Page!</div>;
}

export default App;
