"use client";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Banner = () => {
  // ১. স্লাইডের ডাটা এখানে ডিফাইন করুন
  const slides = [
    {
      title: "Find Your Next Read",
      desc: "Discover a world of stories and inspiration waiting for you.",
      bg: "/Banner.png",
      // মোবাইলে ছবিটা যাতে সুন্দর দেখায় তাই পজিশন সেট করা
      mobilePos: "bg-center", 
    },
    {
      title: "Expand Knowledge",
      desc: "Explore our vast collection of technical and scientific books.",
      bg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000",
      mobilePos: "bg-[right_35%_center]", // মোবাইলে মেইন সাবজেক্টকে ফোকাসে রাখবে
    }
  ];

  return (
    <div className="h-[350px] md:h-[500px] w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade" 
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* ২. এখানে ব্যাকগ্রাউন্ড ক্লাসগুলো ডাইনামিক করা হয়েছে */}
            <div 
              className={`relative h-full w-full flex items-center justify-center bg-no-repeat bg-cover transition-all duration-700 ${slide.mobilePos} md:bg-center`}
              style={{ backgroundImage: `url('${slide.bg}')` }} 
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 w-full px-6 text-center sm:text-left sm:max-w-xl sm:ml-10">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
                  {slide.title}
                </h1>
                
                <p className="text-sm md:text-lg text-[#FFECC0] mb-6 max-w-xs mx-auto sm:mx-0 font-medium line-clamp-2">
                  {slide.desc}
                </p>

                <Link 
                  href="/all-books" 
                  className="bg-[#EE9B9B] hover:bg-[#B36281] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-bold transition-all shadow-lg inline-block active:scale-95"
                >
                  Browse Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #fff;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 24px; /* ওভাল শেপ */
          border-radius: 4px;
          background: #EE9B9B !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};
export default Banner;