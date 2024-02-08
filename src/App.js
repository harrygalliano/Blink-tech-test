import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conversations from "./components/conversations/conversations";
import HamburgerMenu from "./components/hamburger/hamburger";
import ConversationDetail from "./components/conversationDetails/conversationDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Conversations" element={<Conversations />} />
          <Route
            path="/conversation/:conversationId"
            element={<ConversationDetail />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Welcome to the Home Page!</div>;
}

export default App;
