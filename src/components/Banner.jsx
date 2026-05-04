"use client";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Banner = () => {
  const slides = [
    {
      title: "Find Your Next Read",
      desc: "Discover a world of stories and inspiration waiting for you.",
      bg: "/Banner.png"
    },
    {
      title: "Expand Knowledge",
      desc: "Explore our vast collection of technical and scientific books.",
      bg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  return (
    // মোবাইলে হাইট আরও কমিয়ে ৩৫০পিএক্স করা হয়েছে যাতে স্ক্রিনে ফিট হয়
    <div className="h-[350px] md:h-[500px] w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade" 
        navigation={false} // মোবাইলে এরো বাটন ঝামেলা করে, তাই অফ রাখা ভালো
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="relative h-full w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.bg}')` }} 
            >
              {/* Overlay: টেক্সট স্পষ্ট করার জন্য */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content Container: padding এবং alignment ঠিক করা হয়েছে */}
              <div className="relative z-10 w-full px-6 text-center sm:text-left sm:max-w-xl sm:ml-10">
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
                  {slide.title}
                </h1>
                
                <p className="text-sm md:text-lg text-[#FFECC0] mb-6 max-w-sm mx-auto sm:mx-0 font-medium line-clamp-2">
                  {slide.desc}
                </p>

                <Link 
                  href="/all-books" 
                  className="bg-[#EE9B9B] hover:bg-[#B36281] text-white px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-bold transition-all shadow-lg inline-block active:scale-95"
                >
                  Browse Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        /* বুলেটের সাইজ মোবাইলে একটু ছোট করা */
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #fff;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #EE9B9B !important;
          opacity: 1;
        }
        /* ডেস্কটপে এরো দেখাবে */
        @media (min-width: 768px) {
          .swiper-button-next, .swiper-button-prev {
            display: flex !important;
            color: #EE9B9B !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;