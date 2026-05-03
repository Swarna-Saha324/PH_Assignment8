"use client";
import { useState, useEffect } from "react";
import Bookcard from "@/components/Bookcard";

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]); // ক্যাটাগরি লিস্টের জন্য
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All"); // ডিফল্ট 'All'

    useEffect(() => {
        const fetchData = async () => {
            try {
                // ১. বইয়ের ডাটা ফেচ
                const booksRes = await fetch("https://ph-assignment8.vercel.app/data.json");
                const booksData = await booksRes.json();
                setBooks(Array.isArray(booksData) ? booksData : []);

                // ২. ক্যাটাগরি ডাটা ফেচ
                const catRes = await fetch("https://ph-assignment8.vercel.app/catagory.json");
                const catData = await catRes.json();
                setCategories(catData);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };
        fetchData();
    }, []);

    // ৩. ফিল্টারিং লজিক (Search + Category)
    const filteredBooks = books.filter((book) => {
        const matchesSearch = (book?.title || book?.bookName || "")
            .toString().toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCategory = activeCategory === "All" || 
            book?.category?.toLowerCase() === activeCategory.toLowerCase();

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-[#B36281] mb-10 text-center">Explore Our Library</h1>

            {/* Search Input */}
            <div className="flex justify-center mb-10">
                <input
                    type="text"
                    placeholder="Search by title..."
                    className="input input-bordered w-full max-w-md border-[#FFC09F] focus:outline-[#EE9B9B]"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* --- Left Sidebar: Category Filter --- */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="bg-[#FFECC0]/30 p-6 rounded-2xl border border-[#FFC09F]/20 sticky top-24">
                        <h2 className="text-xl font-bold text-[#B36281] mb-6 border-b border-[#FFC09F] pb-2">Categories</h2>
                        <div className="flex flex-col gap-2">
                            {/* ডিফল্ট 'All' বাটন */}
                            <button
                                onClick={() => setActiveCategory("All")}
                                className={`text-left px-4 py-2 rounded-lg font-medium transition-all ${
                                    activeCategory === "All" 
                                    ? "bg-[#EE9B9B] text-white shadow-md" 
                                    : "hover:bg-[#FFECC0] text-gray-600"
                                }`}
                            >
                                All Books
                            </button>

                            {/* ডাইনামিক ক্যাটাগরি লিস্ট */}
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.slug)}
                                    className={`text-left px-4 py-2 rounded-lg font-medium transition-all ${
                                        activeCategory === cat.slug 
                                        ? "bg-[#EE9B9B] text-white shadow-md" 
                                        : "hover:bg-[#FFECC0] text-gray-600"
                                    }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* --- Right Side: Book Grid --- */}
                <main className="flex-grow">
                    {filteredBooks.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBooks.map((book) => (
                                <Bookcard key={book.bookId || book.id} book={book} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                            <p className="text-gray-400 text-lg italic font-serif">
                                No books found in this category.
                            </p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default AllBooks;