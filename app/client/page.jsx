"use client"

import useSWR from "swr";

const url = "https://api.quotable.io/random?tags=technology";
const fetcher = (url) => fetch(url).then((res) => res.json());


const Client = () => {
    const { data, error, isLoading } = useSWR(url, fetcher);

    if (error) return <div>Error</div>
    if (isLoading) return <div>
        <h1 className="font-bold text-4xl">Client Page</h1>
        <h1 className="text-lg">Data is Lodaing...</h1>
    </div>

    // console.log(data?.content, "=====");

    return (
        <>
            <h1 className="font-bold text-4xl">Client Page</h1>
            <h1 className="text-lg">{data?.content}</h1>
        </>
    );
};

export default Client;
