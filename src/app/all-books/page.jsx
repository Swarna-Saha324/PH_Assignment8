"use client";
import { useState, useEffect } from "react";
import Bookcard from "@/components/Bookcard";

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await fetch("https://ph-assignment8.vercel.app/data.json");
                const data = await res.json();
               
                setBooks(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };
        fetchBooks();
    }, []);

    
    const filteredBooks = books.filter((book) => {
        
        const title = book?.title ? String(book.title) : "";
        return title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-[#B36281] mb-10 text-center">All Books</h1>

            {/* Search Input */}
            <div className="flex justify-center mb-10">
                <input
                    type="text"
                    placeholder="Search by title..."
                    className="input input-bordered w-full max-w-md border-[#FFC09F] focus:outline-[#EE9B9B]"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Grid View */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredBooks.map((book) => (
                    <Bookcard key={book.bookId || book.id} book={book} />
                ))}
            </div>
            
            {filteredBooks.length === 0 && (
                <p className="text-center text-gray-400 mt-10">No books found.</p>
            )}
        </div>
    );
};

export default AllBooks;