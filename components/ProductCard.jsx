import Image from "next/image";
import Link from "next/link";
;
const ProductCard = ({ data }) => {
    const { item_id, Item_NameEN, Division, DescriptionEN, Nutrition_Facts } = data;

    return (

        <Link href={`/smartfull/${item_id}`}
            className="w-80 h-80 bg-white rounded-md shadow-md hover:scale-105 duration-200 m-2">
            <div className="">
                <Image
                    src={data?.MediaEN?.primary?.url}
                    alt={data?.NameEN}
                    width={100} height={100}
                    className="w-screen h-[180px] bg-contain overflow-hidden rounded-t-lg"
                />
            </div>
            <div className="font-bold text-lg mt-2 px-2 truncate">{Item_NameEN}</div>
            <div className="font-medium text-sm mx-2">{Division}</div>
            <div className="flex mx-2 justify-between mt-2">
                <span className="text-[11px] bg-gray-100 px-1 py-[2px] rounded-[4px]">Calories : {Nutrition_Facts.calories}</span>
                <span className="text-[11px] bg-gray-100 px-1 py-[2px] rounded-[4px]">Protein : {Nutrition_Facts.protein}</span>
                <span className="text-[11px] bg-gray-100 px-1 py-[2px] rounded-[4px]">Carbs : {Nutrition_Facts.carbs}</span>
                <span className="text-[11px] bg-gray-100 px-1 py-[2px] rounded-[4px]">Fat : {Nutrition_Facts.fat}</span>
            </div>
            <div className="text-xs px-2 mt-2 line-clamp-2 ">{DescriptionEN}</div>

        </Link>


    );
};

export default ProductCard;
