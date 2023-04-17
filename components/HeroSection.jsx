'use client'
import ProductCard from "@/components/ProductCard";
import axios from "axios";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const HeroSection = () => {
    const [data, setData] = useState([]);
    const [subDate, setSubDate] = useState('');

    const fetchData = async () => {
        const res = await axios.post("https://api.dietcenter.org/api/getcustomerselection", { Customer_ID: 8043 })
        const data = await res?.data;
        setData(data)
    }

    const calendarObj = data?.Subscriptions?.[0];
    const nestedArray = Object.entries(calendarObj || {});


    // const subscriptionData = [];

    // for (let i = 0; i < nestedArray.length; i++) {
    //     for (let j = 0; j < nestedArray[i].length; j++) {
    //         subscriptionData.push(nestedArray[i][j]);
    //         // console.log(nestedArray[i][j]?.meals);
    //     }
    // }

    const calendar = []
    calendar.push(nestedArray[18]?.[1].calendar);

    function getMealsData(data) {
        const mealsData = [];

        data.forEach(obj => {
            for (let date in obj) {
                mealsData.push([date, obj[date].meals]);
            }
        });
        return { mealsData };
    }
    const mealsData = getMealsData(calendar);

    // const id = useMemo(() => {
    //     return abc(calendar);
    // }, [subDate])

    const subIDs = [];
    mealsData?.mealsData.map((item) => {
        item[0] == subDate && item[1].map(i => subIDs.push(i?.item_id))
    })
    const filteredItems = data?.Items_Master?.filter(item => subIDs.includes(item.item_id));
    // console.log(filteredItems, "=====");


    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="max-w-7xl my-8 mx-auto mb-3 flex flex-col items-center justify-evenly">
            {/* Heading $ Desc */}
            <div className="flex items-center flex-col">
                <h1 className="font-extrabold text-4xl">{calendarObj?.NameEN}</h1>
                <p className="text-sm max-w-md text-center font-bold leading-tight bg-gray-50 p-2 rounded-md">
                    {calendarObj?.Varient_NameEN}
                </p>
                <p className="text-base max-w-md text-center font-light leading-tight bg-gray-50 p-2 rounded-md">
                    {calendarObj?.Short_DescriptionEN}
                </p>
            </div>

            {/* Date Button */}
            <div className="flex flex-wrap justify-center mt-8 max-w-xl">
                {mealsData?.mealsData?.map((date, index) => (
                    <div
                        key={index}
                        onClick={() => setSubDate(date[0])}
                        className="cursor-podatenter bg-red-500 text-white text-sm font-light px-3 py-1 rounded-md hover:bg-gray-300 hover:text-black m-1">
                        {date[0]}
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap justify-center">
                {filteredItems?.map((data) => <ProductCard key={data.item_id} data={data} />
                )}
            </div>

        </div>
    );
};

export default HeroSection;


//8043