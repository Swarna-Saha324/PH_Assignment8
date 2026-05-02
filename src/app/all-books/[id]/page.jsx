import Image from 'next/image';
import React from 'react';


const BookDetailPage = async ({ params }) => {
   
    const { id } = await params;

    
    const res = await fetch(`https://ph-assignment8.vercel.app/data.json`, {
        cache: 'no-store'
    });
    const books = await res.json();

  
    const book = books.find((b) => String(b.id) === String(id));

   
    if (!book) {
        return (
            <div className="container mx-auto p-20 text-center">
                <h1 className="text-2xl font-bold text-red-500">Book Not Found!</h1>
            </div>
        );
    }

    
    const { title, author, category, available_quantity, image_url, description } = book;

    return (
        <div className="container mx-auto p-4 md:p-10 font-sans">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
                
               
               <div className="w-full md:w-2/5 flex items-start justify-center">
  <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
    <Image 
      src={image_url} 
      alt={title} 
      width={500} 
      height={700} 
      layout="responsive" 
      className="w-full h-auto object-cover"
      priority 
    />
  </div>
</div>

                {/* 2. Right Side: Text & Data Section */}
                <div className="w-full md:w-3/5 space-y-3 pt-4 md:pt-0">
                    <div className="space-y-2">
                        <span className="inline-block bg-pink-50 text-pink-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                            {category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-[#111827] leading-tight">
                            {title}
                        </h1>
                        <p className="text-gray-500 italic text-lg md:text-xl">By {author}</p>
                    </div>

                    <div className="border-t border-gray-100 pt-3">
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
                            {description || "No description provided for this book."}
                        </p>
                    </div>

                    <div className="border-t border-gray-100 pt-6 space-y-1">
                        <p className="text-gray-500 text-sm md:text-base font-medium">Available Quantity</p>
                        <p className="text-3xl md:text-4xl font-bold text-[#B36281]">
                            {available_quantity} copies
                        </p>
                    </div>

                    <div className="pt-8">
                        <button className="w-full md:w-fit bg-[#B36281] text-white px-12 py-4 rounded-xl font-bold hover:bg-[#EE9B9B] transition-all shadow-lg text-lg active:scale-95">
                            Borrow Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;