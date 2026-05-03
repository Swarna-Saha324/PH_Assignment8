"use client";
import Link from 'next/link';
// Swiper Components এবং Styles ইম্পোর্ট করুন
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Banner = () => {
  // স্লাইডের ডাটা (চাইলে আলাদা ফাইল থেকেও আনতে পারেন)
  const slides = [
    {
      title: "Find Your Next Read",
      desc: "Discover a world of stories, knowledge, and inspiration waiting for you on our shelves.",
      bg: "/Banner.png"
    },
    {
      title: "Expand Your Knowledge",
      desc: "Explore our vast collection of technical and scientific books to boost your career.",
      bg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Join Our Community",
      desc: "Connect with thousands of book lovers and share your passion for reading.",
      bg: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  return (
    <div className="h-[500px] w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade" // স্মুথ ফেড এনিমেশন
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }} // ৫ সেকেন্ড পরপর স্লাইড হবে
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="relative h-full flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.bg}')` }} 
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg text-[#FFECC0] mb-8 max-w-lg mx-auto font-medium">
                  {slide.desc}
                </p>
                <Link 
                  href="/all-books" 
                  className="bg-[#EE9B9B] hover:bg-[#B36281] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl inline-block"
                >
                  Browse Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper এর এরো বাটনগুলোর কালার কাস্টমাইজ করার জন্য ছোট CSS */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: #EE9B9B !important;
        }
        .swiper-pagination-bullet-active {
          background: #EE9B9B !important;
        }
      `}</style>
    </div>
  );
};

export default Banner;