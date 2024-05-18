const Logo = ({ imgSrc, text }) => {
  return (
    <div className="w-14 h-6">
      <img src={imgSrc} alt="logo" className="h-full" />
      {text && <p>{text}</p>}
    </div>
  );
};

export default Logo;
