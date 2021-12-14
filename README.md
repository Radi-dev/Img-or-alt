# Img-or-alt
This react component that will render image tag only if the image source is found without error, 
otherwise it renders only the alt text in a <p> tag. 
  This eliminates the broken image icon before the alt text.


Sample basic usage:
<ImgOrAlt src="path/to/image" alt="alternate-text"/>

Usage with extra img properties:
<ImgOrAlt src="path/to/image" alt="alternate-text"
width="100" />
