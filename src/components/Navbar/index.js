import React from "react";
import { Link } from "react-router-dom";

import { NavbarWrapper } from "./style";
import Temple from "../../assets/temple.svg";

export default function Navbar() {
  const items = [
    { routes: "/login", text: "Login" },
    { routes: "/signup", text: "Signup" },
  ];
  return (
    <NavbarWrapper className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="dojo logo" />
          <span>The dojo</span>
        </li>
        {items.map(({ routes, text }, index) => (
          <li key={index}>
            <Link to={routes}>{text}</Link>
          </li>
        ))}
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </NavbarWrapper>
  );
}
