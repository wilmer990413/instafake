import React from "react";

function Image(props) {
  const { name, alt } = props;
  const imagePath = require(`../../img/${name}.PNG`).default;

  return <img src={imagePath} alt={alt} />;
}

export default Image;
