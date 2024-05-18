import clsx from "clsx";

const Button = ({ label, leftIcon, rightIcon, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(["btn flex justify-between align-center", [className]])}
    >
      <span>{leftIcon && leftIcon}</span>
      <span className="btn-label">{label}</span>
      <span>{rightIcon && rightIcon}</span>
    </div>
  );
};

export default Button;
