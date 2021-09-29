// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);
const SwiperSection = ({ data, Component }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination
      loop
      autoplay
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((curr, index) => {
        return (
          <SwiperSlide key={index}>
            <Component data={curr} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperSection;
