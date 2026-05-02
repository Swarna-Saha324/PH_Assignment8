import Bookcard from "./Bookcard";

const TopBooks = async () => {
    const res = await fetch("https://ph-assignment8.vercel.app/data.json");
            const data = await res.json();
            console.log(data);
     const topbooks = data.slice(0,4)
     console.log(topbooks);
    return (
        <div>
            <h1 className ="text-2xl font-bold text-[#ffecc0] mt-5 text-center">Top Books</h1>

            <div>
                {topbooks.map((book) => (
                    <Bookcard key={book.id} book={book} >
                       
                    </Bookcard>
                ))}
            </div>
        </div>
    );
};

export default TopBooks;