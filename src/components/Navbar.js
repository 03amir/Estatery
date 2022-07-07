import React from "react";
import "../styles/Navbar.css";
import { MdOutlineRealEstateAgent } from "react-icons/md";

function Navbar(props) {
  return (
    <div className="nav">
      <div className="left">
        <h2 className="violate"> <MdOutlineRealEstateAgent /> Estatery</h2>

        <p>Rent</p>
        <p>Buy</p>
        <p>Sell</p>

        <select>
          <option>Manage Property</option>
        </select>

        <select>
          <option>Resources</option>
        </select>
      </div>

      <div className="right">
        <button style={{ backgroundColor: "white", color: "#7066E9" }}>
          Sign Up
        </button>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
