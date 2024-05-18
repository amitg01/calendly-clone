import { useState } from "react";

import Logo from "./Logo";
import Button from "./ui/button";
import Dropdown from "./ui/dropdown";

import { X, ExternalLink, Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="navbar">
        <Logo imgSrc={"../public/assets/logo.png"} />
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
      <aside className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={handleMenu}>
          <X strokeWidth={1.5} fontSize={"1rem"} />
        </span>
        <div className="nav-btns">
          <span>
            <Dropdown label="Menu" items={["Profile", "Settings"]} />
          </span>
          <span>Contact us</span>
          <span>
            <Button
              leftIcon={<ExternalLink color="#378760" strokeWidth={1.5} />}
              label={"Share Link"}
              className="outline-btn"
            />
          </span>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
