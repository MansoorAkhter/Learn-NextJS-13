import axios from "axios";
import Image from "next/image";

const FoodDetails = async ({ params }) => {
    const foodId = params.id;
    const res = await axios.post("https://api.dietcenter.org/api/getcustomerselection", { Customer_ID: 8043 })
    const data = await res?.data;

    const filteredItems = data?.Items_Master?.filter(item => foodId.includes(item.item_id));

    return (
        <div className="w-full">
            {filteredItems.map((i, index) => (<div key={index} className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
                <Image
                    src={i?.MediaEN?.primary?.url}
                    width={500}
                    height={300}
                    className="rounded-lg"
                    style={{ maxWidth: "100%", height: "100%" }}
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                    alt="Movie Poster"
                />
                <div className="text-lg mb-3 text-justify">
                    <h2 className="text-2xl mb-3 font-bold">{i?.Item_NameEN}</h2>
                    <p className=""><span className="font-semibold mr-1">Description:</span>{i?.DescriptionEN}</p>
                    <p className="my-3"><span className="font-semibold mr-1">Nutrition Facts:</span>{ }</p>
                    <div className="flex justify-between mt-2 font-medium">
                        <span className="bg-gray-100 px-3 py-1 rounded-md">Calories: {i.Nutrition_Facts.calories}</span>
                        <span className="bg-gray-100 px-3 py-1 rounded-md">Protein: {i.Nutrition_Facts.protein}</span>
                        <span className="bg-gray-100 px-3 py-1 rounded-md">Carbs: {i.Nutrition_Facts.carbs}</span>
                        <span className="bg-gray-100 px-3 py-1 rounded-md">Fat: {i.Nutrition_Facts.fat}</span>
                    </div>
                </div>
            </div>))}
        </div>
    )

};

export default FoodDetails;
