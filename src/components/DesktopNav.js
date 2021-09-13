import React from "react";
import QuerySelection from "./QuerySelection";
function DesktopNav() {
  return (
    <div className="flex flex-row w-full z-40 shadow-lg bg-red-300">
      <nav className="flex flex-row w-full">
        <QuerySelection />
      </nav>
    </div>
  );
}

export default DesktopNav;
