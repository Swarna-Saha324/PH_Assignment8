import Bookcard from "./Bookcard";

const TopBooks = async () => {
    let topbooks = []; // ডিফল্ট ভ্যালু সেট করে রাখা ভালো যাতে ম্যাপ ফাংশন এরর না দেয়

    try {
       
        const res = await fetch("https://ph-assignment8.vercel.app/data.json", {
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        topbooks = data.slice(0, 4); 
    } catch (error) {
        console.error("Error fetching top books:", error);
       
        return (
            <div className="text-center my-10 text-red-500 font-bold">
                Failed to load top books.
            </div>
        );
    }

  
    return (
        <div className="max-w-7xl mx-auto px-4 mb-20">
            <h1 className="text-4xl font-black text-[#B36281] my-12 text-center tracking-tight">
                Top <span className="text-[#EE9B9B]">Books</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {topbooks.map((book) => (
                    <Bookcard key={book.id || book._id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default TopBooks;