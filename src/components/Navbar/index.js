import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow navbar-expand-sm bg-white py-3">
      <div className="container">
        <Link to="/" className="navbar-brand text-primary font-weight-bold">
          L O G O
        </Link>
        <div>
         <ul class="d-inline-block mb-0">
           <li><Link to="/">Home</Link></li>
           <li><Link to="/">My Portfolio</Link></li>
           <li><Link to="/">Clients</Link></li>
           <li><Link to="/">Get in Touch</Link></li>
         </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
