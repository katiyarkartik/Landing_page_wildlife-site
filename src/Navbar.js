import React from "react";
import logo from "./NatGeoWild.png";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <ul className="nav-list">
          <li>
            <img className="logo" src={logo} alt="" />
          </li>
          <li className="head">Home</li>
          <li className="head">Places</li>
          <li className="head">Wildlife</li>
          <li className="subscribe">
            <button>Subscribe</button>
          </li>

          <div className="menu-icon">
            {" "}
            <MenuOpenIcon />
          </div>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
