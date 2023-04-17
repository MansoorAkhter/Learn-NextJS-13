const books = async () => {
    const res = await fetch("https://simple-books-api.glitch.me/books", { cache: "no-store" });
    const data = res.json();
    return data
}


const Server = async () => {
    const bookData = await books();
    console.log(bookData);

    return (
        <>
            <h1 className="font-bold text-4xl">Server Page</h1>
            {bookData.map((item, index) => <div key={item.id}>{item.name} --- {item.type}</div>)}
        </>
    );
};

export default Server;
