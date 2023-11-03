import React from "react";

function NavBar({ title }) {
  return (
    <nav className="navbar bg-primary">
      <div className="container">
        <a className="navbar-brand mx-auto" style={{ fontSize: "36px", color: "white", fontStyle: "italic", fontFamily: "cursive"}} href="/">
          {title}
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
