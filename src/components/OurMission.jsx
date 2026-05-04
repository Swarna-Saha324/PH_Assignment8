import Image from "next/image"; // এটি উপরে ইমপোর্ট করা থাকতে হবে

const OurMission = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Left: Image with Theme Frame */}
                    <div className="md:w-1/2 relative w-full h-[400px]">
                        {/* Decorative Background Block */}
                        <div className="absolute -top-4 -left-4 w-full h-full bg-[#FFECC0] rounded-[3rem]"></div>
                        
                        {/* Next.js Image Component */}
                        <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-xl border-4 border-white">
                            <Image 
                                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80" 
                                alt="Library Mission" 
                                fill // এটি ব্যবহার করলে কন্টেইনার অনুযায়ী ইমেজ ফিট হয়
                                className="object-cover"
                                unoptimized // এক্সটার্নাল ইমেজের জন্য এটি সেফ
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="md:w-1/2">
                        <span className="text-[#EE9B9B] font-bold uppercase tracking-[0.3em] text-sm">About BookShelf</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-800 leading-tight mt-4 mb-6">
                            Where Every Page <br />
                            <span className="text-[#B36281]">Tells a New Story.</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We believe that knowledge should be accessible to everyone. Our platform 
                            is designed to bridge the gap between readers and their favorite books 
                            with a seamless, modern borrowing experience.
                        </p>
                        <div className="flex gap-4">
                            <div className="bg-[#FFECC0] p-4 rounded-2xl flex-1 border border-[#EE9B9B]/20">
                                <h4 className="font-bold text-[#B36281]">Quality Books</h4>
                                <p className="text-sm text-gray-500">Only the best editions.</p>
                            </div>
                            <div className="bg-[#FFECC0] p-4 rounded-2xl flex-1 border border-[#EE9B9B]/20">
                                <h4 className="font-bold text-[#B36281]">Fast Delivery</h4>
                                <p className="text-sm text-gray-500">Right to your door.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default OurMission;