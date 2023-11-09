"use client"

import Image from "next/image";
import Link from "next/link";
import PopUpSearch from "./PopUpSearch";
import { useState } from "react";

const Navbar = () => {

    const [isFind, setIsFind] = useState(false)

    return (
        <>
            {/* Navbar items */}
            <nav className="fixed w-full z-40">
                <div className="px-4 py-2 flex items-center justify-between bg-white">

                    {/* LOGO */}
                    <Link href={'/'}>
                        <Image
                            src={'/logo.svg'}
                            alt="logo"
                            width={20}
                            height={20}
                            className="w-[71px] h-[36px] ml-2.5 cursor-pointer "
                            priority={true}
                        />
                    </Link>

                    {/* SEARCH INPUT */}
                    <div
                        className="relative hidden xl:block"
                        onClick={() => setIsFind(true)}
                    >
                        <input type="text" placeholder="Search Best Food" className="text-sm border border-[#F0F2F4] outline-none xl:w-[360px] rounded-lg py-2 pl-4 text-white" />
                        <div className="absolute top-1/2 -translate-y-1/2 right-1 bg-primary-color border border-primary-color border-opacity-10 bg-opacity-10 rounded-md h-[80%] px-1.5 flex justify-center items-center">
                            <Image
                                src={'/search.svg'}
                                alt="search icon"
                                width={20}
                                height={20}
                                className="w-5 h-auto cursor-pointer    "
                            />
                        </div>
                    </div>

                    {/* RIGHT SIDE NAVIGATION */}
                    <div className="flex items-center gap-4">
                        <div className="bg-primary-color bg-opacity-10 rounded-md p-1.5 border border-primary-color border-opacity-10 cursor-pointer hidden xl:block">
                            <Image
                                src={'/sun-01.svg'}
                                alt="sun"
                                width={20}
                                height={20}
                                className="xl:w-5 2xl:w-6 xl:h-5 2xl:h-6"
                            />
                        </div>

                        <div className="bg-primary-color bg-opacity-10 rounded-md p-1.5 border border-primary-color border-opacity-10 cursor-pointer hidden xl:block">
                            <Image
                                src={'/nintendo-switch.svg'}
                                alt="nintendo-switch"
                                width={20}
                                height={20}
                                className="xl:w-5 2xl:w-6 xl:h-5 2xl:h-6"

                            />
                        </div>

                        {/* Search For Mobile */}
                        <div className="bg-primary-color bg-opacity-10 rounded-md p-1.5 py-2 border border-primary-color border-opacity-10 cursor-pointer mr-2 xl:hidden">
                            <Image
                                src={'/search.svg'}
                                alt="search icon"
                                width={24}
                                height={24}
                                className="w-6 h-auto"
                            />
                        </div>

                        <div className="bg-[#101010] bg-opacity-10 rounded-md p-1.5 border border-[#101010] border-opacity-10 cursor-pointer">
                            <Image
                                src={'/menu-01.svg'}
                                alt="menu"
                                width={20}
                                height={20}
                                className="xl:w-5 2xl:w-6 xl:h-5 2xl:h-6"
                            />
                        </div>
                    </div>
                </div>
            </nav>

            {/* POPUP Items */}
            <PopUpSearch isFind={isFind} setIsFind={setIsFind}/>
        </>
    );
};

export default Navbar;