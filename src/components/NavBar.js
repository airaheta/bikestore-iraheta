
import React from "react";
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h3>
      Sammy's Bikes  
      </h3>
       
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              City Bikes 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              BMX
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About us...
            </a>
          </li>
          
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
