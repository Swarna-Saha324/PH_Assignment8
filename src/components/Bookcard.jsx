import Image from 'next/image';
import Link from 'next/link';

const Bookcard = ({ book }) => {
  
  const { id, title, author, category, available_quantity, image_url } = book;

  return (
    <div className="bg-white border border-[#FFC09F]/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group h-full">
      
      {/* Book Image Container */}
      <div className="relative h-60 w-full bg-[#FFECC0]/20 overflow-hidden">
        <Image 
          src={image_url} 
          alt={title}
          fill // Parent container cover korar jonno fill use kora hoyeche
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-[#EE9B9B] text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-sm">
          {category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-[#B36281] font-serif text-lg font-bold line-clamp-1 mb-1">
          {title}
        </h3>
        <p className="text-gray-500 text-xs mb-3 italic">By {author}</p>
        
        <div className="mt-auto flex flex-col gap-4">
          {/* Quantity Info */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400">Available:</span>
            <span className={`font-bold ${available_quantity < 5 ? 'text-red-500' : 'text-[#B36281]'}`}>
              {available_quantity} copies
            </span>
          </div>

          {/* Action Button */}
          <Link 
            href={`/all-books/${id}`}
            className="w-full text-center bg-[#EE9B9B] text-white py-2.5 rounded-lg text-sm font-bold hover:bg-[#B36281] transition-colors duration-300 shadow-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bookcard;