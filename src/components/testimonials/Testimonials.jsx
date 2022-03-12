import React from "react";
import "./testimonials.css";
import ME from "../../assets/me.jpg";
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Testimonials = () => {
  return (
    <section>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        id="testimonials"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={ME} alt="me" />
          </div>
          <h5>Lefteris Vlachos</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            distinctio cumque consequatur sed voluptate accusamus, adipisci
            illum, eum laborum rem ab earum, est ea amet. Voluptates ea
            praesentium perspiciatis repudiandae!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={ME} alt="me" />
          </div>
          <h5>Lefteris Vlachos</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            distinctio cumque consequatur sed voluptate accusamus, adipisci
            illum, eum laborum rem ab earum, est ea amet. Voluptates ea
            praesentium perspiciatis repudiandae!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={ME} alt="me" />
          </div>
          <h5>Lefteris Vlachos</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            distinctio cumque consequatur sed voluptate accusamus, adipisci
            illum, eum laborum rem ab earum, est ea amet. Voluptates ea
            praesentium perspiciatis repudiandae!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
