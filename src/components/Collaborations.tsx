import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import bilad from "../../photos/bilad.png";
import almaali from "../../photos/almaali.png";
import bilikair from "../../photos/bilikair.jpg";
import cse from "../../photos/cse.png";
import djezzy from "../../photos/djezzy.png";
import gdg from "../../photos/gdg.png";
import nbq from "../../photos/nbq.png";

const companies = [
  { logo: bilad },
  { logo: almaali },
  { logo: bilikair },
  { logo: cse },
  { logo: djezzy },
  { logo: gdg },
  { logo: nbq }
];

export default function Collaborations() {
  return (
    <section id="collaborations" className="min-h-screen bg-gradient-to-br from-blue-950 to-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Collaborations
        </h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0, // Continuous effect
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3000} // Smooth scrolling speed
          slidesPerView={4} // Number of visible slides
          spaceBetween={30} // Space between slides
          loop={true} // Infinite loop
          allowTouchMove={false} // Disable manual swiping
          className="swiper-container"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-square bg-white/5 rounded-lg overflow-hidden">
                <img
                  src={company.logo}
                  alt="Company logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
