import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./hamburger.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Icon */}
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>☰</span>
      </button>

      {/* Menu Items */}
      {isOpen && (
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Conversations" onClick={() => setIsOpen(false)}>
                Conversations
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
