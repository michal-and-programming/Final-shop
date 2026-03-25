import { useState } from "react";
import './ProductGallery.scss';

const ProductGallery = ({images, title}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = images[activeIndex];

  return(
    <div>
        <div className="activeImageContainer">
          <img src={activeImage} alt={title}/>
        </div>
        <div className="miniImageContainer">
          {images.map((img, index) => 
            <img src={img} key={index} alt={title} onClick={() => setActiveIndex(index)}/>
          )}
        </div>
    </div>
  )
}
export default ProductGallery;
