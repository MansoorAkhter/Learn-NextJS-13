import Image from "next/image";

const Loading = () => {
    return <div className="flex justify-center">
        {/* <img className="h-96" src="spinner.svg" alt="loading..." /> */}
        <Image width={384} height={384} src="spinner.svg" alt="loading..." />

    </div>;
};

export default Loading;
