import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Lamp } from 'lucide-react';

import bilad from "../../project/bilad.png"
import almaali from "../../project/almaali.png"
import bilikair from "../../project/bilikair.png"
import cse from "../../project/cse.png"
import djezzy from "../../project/djazzy.png"
import gdg from "../../project/gdg.png"
import nbq from "../../project/nbq.png"


const companies = [  
  { name: "", logo: bilad },
  { name: "", logo: almaali },
  { name: "", logo: bilikair },
  { name: "", logo: cse },
  { name: "", logo: djezzy },
  { name: "", logo: gdg },
  { name: "", logo: nbq }

];
export default function Collaborations() {
  return (
    <section id="collaborations" className="min-h-screen bg-gradient-to-br from-blue-950 to-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Collaborations</h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0, 
            disableOnInteraction: false 
          }}

          speed={3000} // Speed of the transition
          slidesPerView={4} // Number of visible slides
          spaceBetween={30} // Space between slides
          loop={true} // Infinite loop
          allowTouchMove={false}
          className="swiper-container"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="group relative aspect-square bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all">
                <img
               src={company.logo}

                 alt={company.name}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">{company.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}