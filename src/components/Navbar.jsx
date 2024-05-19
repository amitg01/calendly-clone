import { useState } from "react";

import Logo from "./Logo";
import Button from "./ui/button";
import Dropdown from "./ui/dropdown";

import { ExternalLink, Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="navbar">
        <Logo imgSrc={"assets/logo.png"} />
        <div className="nav-btns">
          <span className="nav-btn">
            <Dropdown label="Menu" items={["Profile", "Settings"]} />
          </span>
          <span className="nav-btn cursor-pointer">Contact us</span>
          <span className="nav-btn">
            <Button
              leftIcon={<ExternalLink color="#378760" strokeWidth={1.5} />}
              label={"Share Link"}
              className="outline-btn cursor-pointer"
            />
          </span>
        </div>
        <div className="display-none toggle" onClick={handleMenu}>
          <Menu color={"#378760"} />
        </div>
      </nav>
      <Sidebar isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
    </>
  );
};

export default Navbar;
