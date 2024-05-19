import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const Dropdown = ({ label, items, value, isSelect, onChange, className }) => {
  const DDRef = useRef();
  const [btnText, setBtnText] = useState(isSelect ? value : label);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (e) => {
    if (!DDRef.current.contains(e.target)) {
      setShowOptions(false);
    }
  };

  const handleClick = (item) => {
    if (isSelect) {
      setBtnText(item);
    }
    onChange?.(item);
    setShowOptions(false);
  };

  useEffect(() => {
    isSelect && setBtnText(value);
  }, [value]);

  return (
    <div className={clsx("select-menu cursor-pointer", className)} ref={DDRef}>
      {label && isSelect && <label className="dropdown-label">{label}</label>}
      <div
        className="select-btn flex align-center"
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        <span className="select-btn-text">{btnText}</span>
        <ChevronDown color="#378760" strokeWidth={1} />
      </div>
      {showOptions && (
        <ul className="options">
          {items.map((item) => (
            <li key={item} onClick={() => handleClick(item)} className="option">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
