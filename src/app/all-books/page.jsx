import Bookcard from "@/components/Bookcard";

const AllBooks = async () => {
    const res = await fetch("https://ph-assignment8.vercel.app/data.json");
            const data = await res.json();
            console.log(data);
     
     console.log(data);
    return (
        <div>
            <h1 className ="text-2xl font-bold text-[#EE9B9B] my-10 text-center">All Books</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data.map((book) => (
                    <Bookcard key={book.id} book={book} >
                       
                    </Bookcard>
                ))}
            </div>
        </div>
    );
};

export default AllBooks;