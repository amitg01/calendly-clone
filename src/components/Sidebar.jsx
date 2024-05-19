import { ExternalLink, X } from "lucide-react";
import Button from "./ui/button";
import Dropdown from "./ui/dropdown";
import clsx from "clsx";

const Sidebar = ({ isMenuOpen, handleMenu }) => {
  return (
    <aside className={clsx("sidebar", { open: isMenuOpen })}>
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
  );
};

export default Sidebar;
