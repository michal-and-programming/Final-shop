import { useState } from "react";
import './ProductGallery.scss';

const ProductGallery = ({images, title}) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return(
    <div>
        <div className="activeImageContainer">
          <img src={activeImage} alt={title}/>
        </div>
        <div className="miniImageContainer">
          {images.map((img, index) => 
            <img src={img} key={index} alt={title} onClick={() => setActiveImage(img)}/>
          )}
        </div>
    </div>
  )
}
export default ProductGallery;
