import React from "react";
import GraphParams from "../GraphParams";
function DesktopNav() {
  return (
    <div className="flex flex-row w-full z-40 shadow-lg bg-red-300">
      <nav className="flex flex-row w-full">
        <GraphParams />
      </nav>
    </div>
  );
}

export default DesktopNav;
