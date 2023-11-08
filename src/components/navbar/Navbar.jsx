import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50">
            <div className="px-4 pt-2 pb-1 flex items-center justify-between bg-white">

                {/* LOGO */}
                <div>
                    <Image
                        src={'/logo.svg'}
                        alt="logo"
                        width={20}
                        height={20}
                        className="w-[71px] h-[36px] ml-2.5 cursor-pointer"
                        priority={true}
                    />
                </div>

                {/* SEARCH INPUT */}
                <div className="relative">
                    <input type="text" placeholder="Search Best Food" className="text-sm border border-[#F0F2F4] outline-none lg:w-[360px] rounded-lg py-2 pl-4" />
                    <div className="absolute top-1/2 -translate-y-1/2 right-1 bg-primary-color border border-primary-color border-opacity-10 bg-opacity-10 rounded-md h-[80%] px-1.5 flex justify-center items-center">
                        <Image
                            src={'/search.png'}
                            alt="search icon"
                            width={20}
                            height={20}
                            className="w-5 h-5 "
                        />
                    </div>

                    {/* <div className="absolute top-1/2 right-0.5 transform -translate-y-1/2 bg-primary-color bg-opacity-10 rounded-md p-1.5 py-1.5 border border-primary-color border-opacity-10 cursor-pointer">
                        <Image
                            src={'/search.png'}
                            alt="search icon"
                            width={20}
                            height={20}
                            className="w-5 h-5 "
                        />
                    </div> */}
                </div>

                {/* RIGHT SIDE NAVIGATION */}
                <div className="flex items-center gap-4">
                    <div className="bg-primary-color bg-opacity-10 rounded-md p-1.5 border border-primary-color border-opacity-10 cursor-pointer">
                        <Image
                            src={'/sun.png'}
                            alt="Mode icon"
                            width={20}
                            height={20}
                            className="xl:w-5 2xl:w-6 xl:h-5 2xl:h-6"
                        />
                    </div>

                    <div className="bg-primary-color bg-opacity-10 rounded-md p-1.5 border border-primary-color border-opacity-10 cursor-pointer">
                        <Image
                            src={'/nintendo-switch.png'}
                            alt="Mode icon"
                            width={20}
                            height={20}
                            className="xl:w-5 2xl:w-6 xl:h-5 2xl:h-6"

                        />
                    </div>

                    <div className="bg-[#101010] bg-opacity-10 rounded-md p-1.5 border border-[#101010] border-opacity-10 cursor-pointer">
                        <Image
                            src={'/menu.png'}
                            alt="Mode icon"
                            width={20}
                            height={20}
                            className="xl:w-5 2xl:w-6 xl:h-5 2xl:h-6"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;