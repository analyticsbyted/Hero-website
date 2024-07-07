import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonials.css";

import Testimonial from "../TestimonialHelper/Testimonial";
import TestimonialsData from "../../assets/data/TestimonialsData";

// Import your feature flag
import featureFlags from "../../featureFlags";

const Testimonials = () => {
  return (
    // Conditionally render the Testimonials section if showTestimonials is true
    featureFlags.showTestimonials && (
      <div className="testimonials-container">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1} // Show 1 slide at a time on mobile (default)
          breakpoints={{
            768: {
              slidesPerView: 2, // Show 2 slides on larger screens
            },
          }}
          navigation
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {TestimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Testimonial {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};

export default Testimonials;
