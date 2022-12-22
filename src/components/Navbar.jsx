import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";
import React from "react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return "#2c2c2c";
    } else {
      return "#8f8f8f";
    }
  };
  const pathMatchRouteCls = (route) => {
    if (route === location.pathname) {
      return "navbarListItemNameActive";
    } else {
      return "navbarListItemName";
    }
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon
              fill={pathMatchRoute("/")}
              width="36px"
              height="36px"
            />
            <p className={pathMatchRouteCls("/")}>Explore</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon
              fill={pathMatchRoute("/offers")}
              width="36px"
              height="36px"
            />
            <p className={pathMatchRouteCls("/offers")}>Offers</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon
              fill={pathMatchRoute("/profile")}
              width="36px"
              height="36px"
            />
            <p className={pathMatchRouteCls("/profile")}>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
