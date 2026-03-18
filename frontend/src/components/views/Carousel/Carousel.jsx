import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'swiper/css';
import './Carousel.scss';

const Carousel = () => {
  const images = [
    'http://localhost:5000/carouselImages/doungtepro-off-road-vehicles-6018152_1920.jpg',
    'http://localhost:5000/carouselImages/alekseiap199232-off-road-outlaw-5063678_1920.jpg',
    'http://localhost:5000/carouselImages/alekseiap199232-mst-3911899_1920.jpg',
    'http://localhost:5000/carouselImages/jamorealmedia-caterpillar-4374222_1920.jpg'
  ];

  return (
    <div className="carouselWrapper">
        <span className='carouselText'>Sklep FAST CARS</span>
        <div className='carouselCart'>
          <Link to={'/'}>
            <span>Strona Główna</span>
          </Link>
          <Link to={'/cart'}>
            <span>Koszyk<FaShoppingCart /></span>
          </Link>
        </div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt='samochód zdalnie sterowany'
              className="carouselImage"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
