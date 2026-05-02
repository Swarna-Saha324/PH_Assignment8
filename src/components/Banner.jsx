import Link from 'next/link';

const Banner = () => {
  return (
    <div 
      className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
      // Inline style-e public folder-er path eibhabe likhte hoy
      style={{ backgroundImage: "url('/Banner.png')" }} 
    >
      {/* Overlay - jate text gulo shelf image-er opore sposto hoy */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Find Your Next Read
        </h1>
        <p className="text-lg text-[#FFECC0] mb-8 max-w-lg mx-auto font-medium">
          Discover a world of stories, knowledge, and inspiration waiting for you on our shelves.
        </p>
        <Link 
          href="/all-books" 
          className="bg-[#EE9B9B] hover:bg-[#B36281] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl inline-block"
        >
          Browse Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;