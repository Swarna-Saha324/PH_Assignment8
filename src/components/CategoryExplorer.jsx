const CategoryExplorer = () => {
    const categories = [
        { name: "Story", icon: "📖", count: "4 Books" },
        { name: "Tech", icon: "💻", count: "4 Books" },
        { name: "Science", icon: "🧪", count: "4 Books" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-[#B36281]">Browse by Category</h2>
                    <div className="w-20 h-1 bg-[#EE9B9B] mx-auto mt-4 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <div key={i} className="bg-[#FFECC0]/40 p-10 rounded-[2.5rem] border-2 border-transparent hover:border-[#B36281] hover:bg-[#FFECC0]/60 transition-all cursor-pointer group text-center">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
                            <h3 className="text-2xl font-extrabold text-gray-800">{cat.name}</h3>
                            <p className="text-[#B36281] font-bold mt-2 uppercase tracking-widest text-xs">{cat.count}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default CategoryExplorer;  

