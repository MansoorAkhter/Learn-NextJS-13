import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
// import Wrapper from "@/components/shared/Wrapper";

const Header = () => {
    return (
        <Link href="/">
            <header className="z-50 sticky inset-0 bg-gray-100 bg-opacity-50 h-auto py-2 backdrop-blur-xl max-w-7xl mx-auto px-2">
                {/* <Wrapper> */}
                <div className="flex items-center justify-between">
                    <div className="">
                        <Image src={logo} alt="Diet logo" width={40} height={40} />
                    </div>

                    <ul className="flex space-x-8 font-medium">
                        <Link href="/">
                            <li>Home</li>
                        </Link>
                        <Link href="/courses">
                            <li>Foods</li>
                        </Link>
                    </ul>
                </div>
                {/* </Wrapper> */}
            </header>
        </Link>
    );
};

export default Header;
