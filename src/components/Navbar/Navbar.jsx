import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Menu = () => {
  return (
    <>
      <NavLink to="/" className="items">
        <p className="item-num">01.</p>
        <p>Home</p>
        <div></div>
      </NavLink>
      <NavLink to="/Projects" className="items">
        <p className="item-num">02.</p>
        <p>Projects</p>
        <div></div>
      </NavLink>
      <NavLink to="/about" className="items">
        <p className="item-num">03.</p>
        <p>About</p>
        <div></div>
      </NavLink>
      <NavLink to="/Experience" className="items">
        <p className="item-num">04.</p>
        <p>Experience</p>
        <div></div>
      </NavLink>
      <NavLink to="/contact" className="items">
        <p className="item-num">05.</p>
        <p>Contact</p>
        <div></div>
      </NavLink>
    </>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openFunc = () => {
    setOpen(!open);
  };
  return (
    <div className="navbar">
      <img src={logo} alt="UR logo" />
      <div className="menu">
        <Menu />
      </div>
      <div className="hamburger">
        {open ? (
          <IoClose className="ham-icon" onClick={openFunc} />
        ) : (
          <HiMenuAlt3 className="ham-icon" onClick={openFunc} />
        )}

        {open && (
          <div className="ham-menu">
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
