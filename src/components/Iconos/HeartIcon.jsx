function HeartIcon() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  const iconColor = clicked ? "#FF7674" : hovered ? "#FF7674" : "black";

  return (
    <FaHeart
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ color: iconColor, cursor: "pointer" }}
    />
  );
}

export default HeartIcon;
