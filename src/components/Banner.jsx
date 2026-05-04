"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// Swiper CSS imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  const slides = [
    {
      title: "Find Your Next Read",
      desc: "Discover a world of stories and inspiration waiting for you.",
      bg: "/Banner.png", // Tomar folder theke image path thik koro
    },
    {
      title: "Expand Your Knowledge",
      desc: "Explore technical, science, and programming books.",
      bg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000",
    },
  ];

  return (
    <section className="relative w-full max-w-full overflow-hidden pt-4 px-4 sm:px-6 lg:px-8">
      {/* Container to center and limit width */}
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Banner Main Wrapper */}
        <div className="relative w-full h-[300px] sm:h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
          
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            effect="fade"
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            observer={true}
            observeParents={true}
            className="w-full h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <div
                  className="relative w-full h-full bg-cover bg-center flex items-center justify-center sm:justify-start"
                  style={{ backgroundImage: `url(${slide.bg})` }}
                >
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/45" />

                  {/* Content - Fully Responsive */}
                  <div className="relative z-10 w-full px-6 sm:px-12 md:px-24 flex flex-col items-center sm:items-start text-center sm:text-left">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-xl">
                      {slide.title}
                    </h1>

                    <p className="text-sm sm:text-lg text-[#FFECC0] mb-8 max-w-[280px] sm:max-w-md lg:max-w-2xl drop-shadow-md">
                      {slide.desc}
                    </p>

                    <Link
                      href="/all-books"
                      className="inline-block bg-[#EE9B9B] hover:bg-[#B36281] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full text-sm sm:text-lg font-bold transition-all active:scale-95 shadow-xl"
                    >
                      Browse Now
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Extreme Override for 1200px and Scroll Issue */}
      <style jsx global>{`
        /* Screenshot-er daine shora bondho korar jonno */
        html, body {
          max-width: 100% !important;
          overflow-x: hidden !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .swiper {
          width: 100% !important;
          max-width: 100% !important;
        }

        .swiper-slide {
          width: 100% !important;
          max-width: 100% !important;
          display: flex !important;
        }

        /* Pagination style */
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #EE9B9B !important;
          width: 24px !important;
          border-radius: 12px !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Banner;