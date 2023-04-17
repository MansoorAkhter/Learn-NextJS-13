'use client'
// import { useRouter } from "next/router";
// import React from "react";


const page = ({ params }) => {
    // const router = useRouter()
    // const { pid } = router.query


    return <h1>Dynamic Segments: {params.slug}</h1>;
};

export default page;
