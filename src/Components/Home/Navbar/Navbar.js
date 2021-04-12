import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-transperant">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link mr-5" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link mr-5" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item mx-4">
                <a class="nav-link mr-5" aria-current="page" href="#">
                  Dental services
                </a>
              </li>
              <li class="nav-item mx-4 text-white">
                <a class="nav-link mr-5 text-white" aria-current="page" href="#">
                  Review
                </a>
              </li>
              <li class="nav-item mx-4 text-white">
                <a class="nav-link mr-5 text-white" aria-current="page" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item mx-4 text-white">
                <a class="nav-link mr-5 text-white" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
