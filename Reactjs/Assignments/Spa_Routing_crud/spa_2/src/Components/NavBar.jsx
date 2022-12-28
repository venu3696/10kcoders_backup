import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark  bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="h">
        Single page Application...2
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
            <Link to="/contactUs" class="nav-link ">
              {" "}
              ContactUs{" "}
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/login" class="nav-link ">
              {" "}
              Login{" "}
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/SignUp" class="nav-link ">
              {" "}
              SignUp{" "}
            </Link>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="na">
                {" "}
                Disabled
              </a>
            </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar