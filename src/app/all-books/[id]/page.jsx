"use client"; // ক্লায়েন্ট কম্পোনেন্টে রূপান্তর

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { authClient } from "@/lib/auth-client"; 
import { ToastContainer, toast } from 'react-toastify';

const BookDetailPage = () => {
    const { id } = useParams();
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // ১. প্রাইভেট রুট প্রোটেকশন
        if (!isPending && !session) {
            router.push("/login");
            return;
        }

        // ২. ডাটা ফেচিং
        const fetchBook = async () => {
            try {
                const res = await fetch(`https://ph-assignment8.vercel.app/data.json`, {
                    cache: 'no-store'
                });
                const books = await res.json();
                const foundBook = books.find((b) => String(b.id) === String(id));
                setBook(foundBook);
            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id, session, isPending, router]);

    const handleBorrow = () => {
        // এখানে ফিউচারে ডাটাবেজ আপডেটের লজিক লিখতে পারবেন
        toast.success(`Successfully borrowed: ${book.title}`, {
            duration: 4000,
            position: 'top-center',
            style: {
                background: '#B36281',
                color: '#fff',
                fontWeight: 'bold',
                borderRadius: '15px'
            },
        });
    };

    if (isPending || loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <span className="loading loading-spinner loading-lg text-[#B36281]"></span>
            </div>
        );
    }

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
            <ToastContainer /> 
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
                
                {/* 1. Left Side: Image Section */}
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
                <div className="w-full md:w-3/5 space-y-3 pt-4 md:pt-0 text-gray-800">
                    <div className="space-y-2">
                        <span className="inline-block bg-pink-50 text-pink-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                            {category || "Story"}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
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
                        <button 
                            onClick={handleBorrow}
                            className="w-full md:w-fit bg-[#B36281] text-white px-12 py-4 rounded-xl font-bold hover:bg-[#EE9B9B] transition-all shadow-lg text-lg active:scale-95"
                        >
                            Borrow Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;