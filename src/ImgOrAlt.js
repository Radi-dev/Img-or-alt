import React, { useState } from "react";
const ImgOrAlt = ({ src, placeholder = null, alt = "Image", ...props }) => {
  /*
  This function displays the target image if its available, but
  only displays alt text (without the broken image icon) when the 
  target image isn't available. User can pass in extra props acceptable to the img tag */
  const altHandler = () => {
    placeholder ? setImg(placeholderJsx) : setImg(altImg);
  };

  const imgJsx = (
    <img src={src} alt={alt} onError={altHandler} {...props}></img>
  );
  const placeholderJsx = <img src={placeholder} alt={alt} {...props}></img>;
  const altImg = <div>{alt}</div>;

  const [Img, setImg] = useState(imgJsx);

  return Img;
};

export default ImgOrAlt;
