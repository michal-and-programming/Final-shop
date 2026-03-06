import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Carousel.scss';

const Carousel = () => {
  const images = [
    '/carouselImages/doungtepro-off-road-vehicles-6018152_1920.jpg',
    '/carouselImages/alekseiap199232-off-road-outlaw-5063678_1920.jpg',
    '/carouselImages/alekseiap199232-mst-3911899_1920.jpg',
    '/carouselImages/jamorealmedia-caterpillar-4374222_1920.jpg'
  ];

  return (
    <div className="carouselWrapper">
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