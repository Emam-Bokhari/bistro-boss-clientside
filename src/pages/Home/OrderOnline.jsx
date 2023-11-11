import Title from "../../sharedComponents/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../assets/menu/01.jpeg"
import img2 from "../../assets/menu/02.jpg"
import img3 from "../../assets/menu/03.jpg"
import img4 from "../../assets/menu/04.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderOnline = () => {
    return (
        <div>
            <Title subHeading={"---From 11.00pm to 10.00am---"} heading={"Order Online"} />

<div className="my-10" >
    
<Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} />
            </SwiperSlide>
        <SwiperSlide><img src={img2} /></SwiperSlide>
        <SwiperSlide><img src={img3} /></SwiperSlide>
        <SwiperSlide><img src={img4} /></SwiperSlide>
      </Swiper>
</div>


        </div>
    );
};

export default OrderOnline;