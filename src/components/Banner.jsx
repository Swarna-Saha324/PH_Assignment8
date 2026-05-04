"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  const slides = [
    {
      title: "Find Your Next Read",
      desc: "Discover a world of stories and inspiration waiting for you.",
      bg: "/Banner.png",
    },
    {
      title: "Expand Your Knowledge",
      desc: "Explore technical, science, and programming books.",
      bg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000",
    },
  ];

  return (
    <div className="container h-[320px] sm:h-[420px] md:h-[550px] overflow-hidden rounded-xl">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >

              <div className="absolute inset-0 bg-black/50" />

              <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 flex flex-col justify-center sm:items-start items-center text-center sm:text-left">
                
                <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-white leading-snug md:leading-tight mb-3 sm:mb-4">
                  {slide.title}
                </h1>

                <p className="text-xs sm:text-base md:text-lg text-[#FFECC0] mb-5 max-w-[90%] sm:max-w-xl">
                  {slide.desc}
                </p>

                <Link
                  href="/all-books"
                  className="inline-block bg-[#EE9B9B] hover:bg-[#B36281] text-white px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all shadow-lg active:scale-95"
                >
                  Browse Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      <style jsx global>{`
        .swiper {
          height: 100%;
        }

        .swiper-slide {
          height: 100%;
        }

        .swiper-pagination {
          bottom: 10px !important;
        }

        .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background: white;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 20px;
          border-radius: 999px;
          background: #ee9b9b !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Banner;