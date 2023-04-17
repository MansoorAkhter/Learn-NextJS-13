// Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.

const getFiction = async () => {
    const res = await fetch("https://simple-books-api.glitch.me/books?type=fiction", { cache: "no-store" });
    const data = res.json();
    return data
}
const getNonFiction = async () => {
    const res = await fetch("https://simple-books-api.glitch.me/books?type=non-fiction", { cache: "no-store" });
    const data = res.json();
    return data
}

const Sequential = async () => {
    const fictionBooks = await getFiction();
    const nonFictionBooks = await getNonFiction();


    return (
        <div className="">
            <h1 className="font-bold text-2xl">Sequential Data Fetching</h1>
            <br />
            <h1 className="font-bold text-lg">Fiction Books</h1>
            <ul>
                {fictionBooks.map((book) => (
                    <li key={book?.id}>
                        {book?.name}
                    </li>
                ))}
            </ul>
            <h1 className="font-bold text-lg">Non-Fiction Books</h1>
            <ul>
                {nonFictionBooks.map((book) => (
                    <li key={book?.id}>
                        {book?.name}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Sequential;
