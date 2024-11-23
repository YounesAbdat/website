import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


import bilad from "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385182/ykc5nhbpq3jbyjr6unp3.png"
import almaali from "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385182/yw1wqlafoigpm1foim8u.png"
import bilikair from "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385182/y9nyccgmc16upfqs1yv8.jpg"
import cse from "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385182/v2rdolnkbuacmg4djn4d.png"
import djezzy from "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385183/kuw9b3yahf6ltc2odq9f.png"
import gdg from "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385182/bg0k0rxpw90voydwkk4f.png"
import nbq from "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385182/grdmiesyiuwmkj5l375y.png"
import { Lamp } from 'lucide-react';


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
