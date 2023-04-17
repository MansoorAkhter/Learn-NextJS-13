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

const Parallel = async () => {
    const fictionBooks = getFiction();
    const nonFictionBooks = getNonFiction();

    // ---why----Promise.all()------- agr sari api reslove hogai to sari 1 sath return hojaengi Or agr kisi 1 api me b Error aya to pora promise reject hojaega

    const [fiction, nonFiction] = await Promise.all([
        fictionBooks,
        nonFictionBooks,
    ]);

    return (
        <div className="">
            <h1 className="font-bold text-2xl">Parallel Data Fetching</h1>
            <br />
            <h1 className="font-bold text-lg">Fiction Books</h1>
            <ul>
                {fiction.map((book) => (
                    <li key={book?.id}>
                        {book?.name}
                    </li>
                ))}
            </ul>
            <h1 className="font-bold text-lg">Non-Fiction Books</h1>
            <ul>
                {nonFiction.map((book) => (
                    <li key={book?.id}>
                        {book?.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Parallel;
