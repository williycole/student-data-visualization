import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Nav(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <header id="nav-container">
      {width < breakpoint ? <MobileNav /> : <DesktopNav />}
    </header>
  );
}
export default Nav;
