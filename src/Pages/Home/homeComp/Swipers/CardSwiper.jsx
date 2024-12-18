
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './swiper.css';

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import Cards from './Cards';
import { img1, img10, img2, img3, img5, img6, img7, img8, img9  } from './images/image';

export default function CardSwiper() {
  return (
    <>
    
      <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{
            delay: 2000, // 2 seconds
            disableOnInteraction: false, // Keeps autoplay working after user interactions
          }}

          className="mySwiper md:scale-150 "

        >
          <SwiperSlide><Cards img={img1} /></SwiperSlide>
          <SwiperSlide><Cards img={img2} /></SwiperSlide>
          <SwiperSlide><Cards img={img3} /></SwiperSlide>
          <SwiperSlide><Cards img={img5} /></SwiperSlide>
          <SwiperSlide><Cards img={img6} /></SwiperSlide>
          <SwiperSlide><Cards img={img7} /></SwiperSlide>
          <SwiperSlide><Cards img={img8} /></SwiperSlide>
          <SwiperSlide><Cards img={img9} /></SwiperSlide>
          <SwiperSlide><Cards img={img10} /></SwiperSlide>
          
        </Swiper>
      
    </>
  );
}
