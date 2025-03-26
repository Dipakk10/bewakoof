import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles

function Slider({images}) {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={3}
            modules={[Autoplay, Pagination]}
            autoplay={{
                delay: 3000, // Time in milliseconds
                disableOnInteraction: false, // Keeps autoplay even when user interacts
            }}
            pagination={{
                dynamicBullets: true,
                clickable: true, // Allows clicking on dots
            }}
            style={{ paddingBottom: "30px" }}
        >
            {images.map(img=><SwiperSlide><img src={`/image/${img.name}`} alt={img.alt} style={{ maxWidth: "100%" }} /></SwiperSlide>)}
            {/* <SwiperSlide><img src="/image/asset 1.gif" alt="image" style={{ maxWidth: "100%" }} /></SwiperSlide>
            <SwiperSlide><img src="/image/asset 2.webp" alt="" style={{ maxWidth: "100%" }} /></SwiperSlide>
            <SwiperSlide><img src="/image/asset 3.webp" alt="" style={{ maxWidth: "100%" }} /></SwiperSlide>
            <SwiperSlide><img src="/image/asset 4.webp" alt="" style={{ maxWidth: "100%" }} /></SwiperSlide>
            <SwiperSlide><img src="/image/asset 5.webp" alt="" style={{ maxWidth: "100%" }} /></SwiperSlide>
            <SwiperSlide><img src="/image/asset 6.webp" alt="" style={{ maxWidth: "100%" }} /></SwiperSlide>
            <SwiperSlide><img src="/image/asset 7.webp" alt="" style={{ maxWidth: "100%" }} /></SwiperSlide>
            <SwiperSlide><img src="/image/asset 8.webp" alt="" style={{ maxWidth: "100%" }} /></SwiperSlide> */}


            <div className="swiper-pagination"></div>
        </Swiper>
    );
};

export default Slider;
