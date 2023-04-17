const books = async () => {
    const res = await fetch("https://simple-books-api.glitch.me/books");
    const data = res.json();
    return data
}


const Static = async () => {
    const bookData = await books();

    return (
        <>
            <h1 className="font-bold text-4xl">Static Page</h1>
            {bookData.map((item, index) => <div key={item.id}>{item.name} --- {item.type}</div>)}
        </>
    );
};

export default Static;
