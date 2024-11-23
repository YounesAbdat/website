import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Company logos
const bilad = "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385182/ykc5nhbpq3jbyjr6unp3.png";
const almaali = "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385182/yw1wqlafoigpm1foim8u.png";
const bilikair = "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385182/y9nyccgmc16upfqs1yv8.jpg";
const cse = "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385182/v2rdolnkbuacmg4djn4d.png";
const djezzy = "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385183/kuw9b3yahf6ltc2odq9f.png";
const gdg = "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385182/bg0k0rxpw90voydwkk4f.png";
const nbq = "https://res.cloudinary.com/dh2n9wz7a/image/upload/v1732385182/grdmiesyiuwmkj5l375y.png";

const companies = [
  { name: "Bilad TV", logo: bilad },
  { name: "Al Maali", logo: almaali },
  { name: "Bilikair", logo: bilikair },
  { name: "CSE Club", logo: cse },
  { name: "Djezzy", logo: djezzy },
  { name: "GDG", logo: gdg },
  { name: "NBQ", logo: nbq },
];

export default function Collaborations() {
  return (
    <section id="collaborations" className="min-h-screen bg-gradient-to-br from-blue-950 to-black py-20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Collaborations</h2>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000, // Pause duration between transitions
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={2000} // Smooth transition speed
          slidesPerView={4} // Number of visible slides
          spaceBetween={20} // Space between slides
          loop={true} // Infinite loop
          allowTouchMove={false} // Disable manual swipe
          className="swiper-container"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="group relative aspect-square bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all">
                <img
                  src={company.logo}
                  alt={company.name || "Company Logo"}
                  className="w-full h-full object-contain opacity-60 group-hover:opacity-80 transition-opacity"
                />
                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all">
                  <h3 className="text-lg font-semibold text-white text-center">
                    {company.name || "Collaborator"}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
