import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark  bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="h">
          Single page Application
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" class="nav-link ">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link ">
                {" "}
                About{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/more" class="nav-link ">
                {" "}
                More{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
