import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import GraphParams from "../GraphParams";

function MobileNav() {
  const [showMenu, setShowMenu] = useState(false);
  if (showMenu) {
    return (
      <div className=" bg-red-300">
        <nav className="">
          <div className="hamburger-container flex flex-row-reverse">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => setShowMenu(!showMenu)}
              className="fixed"
            />
          </div>
          <GraphParams />
        </nav>
      </div>
    );
  } else {
    return (
      <div className="bg-red-300">
        <nav>
          <div className="hamburger-container flex flex-row-reverse">
            <FontAwesomeIcon
              icon={faBars}
              //Note for learning: uses arrow function to set setShowMenu to the opposite of whatever it is on click
              onClick={() => setShowMenu(!showMenu)}
              className=""
            />
          </div>
        </nav>
      </div>
    );
  }
}
export default MobileNav;
