import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SideNavigation = () => {
    return (
        <div className='fixed lg:top-1/2 lg:pl-4 lg:pr-3 lg:-translate-y-1/2 flex lg:flex-col items-center justify-center lg:gap-[35px] bg-white h-full z-40'>

            <div className="bg-primary-color bg-opacity-10 rounded-md p-1.5 border border-primary-color border-opacity-10 cursor-pointer">
                <Image
                    src={'/home.png'}
                    alt="home icon"
                    width={24}
                    height={24}
                    className='xl:w-5 2xl:w-6 xl:h-5 2xl:h-6'
                />
            </div>
            <div className="bg-[#101010] bg-opacity-10 border border-black rounded-md p-1.5 border-opacity-0 cursor-pointer">
                <Link href={'#'}>
                    <Image
                        src={'/apps.png'}
                        alt="apps icon"
                        width={24}
                        height={24}
                        className='xl:w-5 2xl:w-6 xl:h-5 2xl:h-6'
                    />
                </Link>
            </div>
            <div className="bg-[#101010] bg-opacity-10 border border-black rounded-md p-1.5 border-opacity-0 cursor-pointer">
                <Image
                    src={'/Frame.png'}
                    alt="Frame icon"
                    width={20}
                    height={20}
                    className='xl:w-5 2xl:w-6 xl:h-5 2xl:h-6'
                />
            </div>
            <div className="bg-[#101010] bg-opacity-10 border border-black rounded-md p-1.5 border-opacity-0 cursor-pointer">
                <Image
                    src={'/video-replay.png'}
                    alt="video icon"
                    width={20}
                    height={20}
                    className='xl:w-5 2xl:w-6 xl:h-5 2xl:h-6'
                />
            </div>
            <div className="bg-[#101010] bg-opacity-10 border border-black rounded-md p-1.5 border-opacity-0 cursor-pointer">
                <Image
                    src={'/more.png'}
                    alt="more icon"
                    width={20}
                    height={20}
                    className='xl:w-5 2xl:w-6 xl:h-5 2xl:h-6'
                />
            </div>
        </div>
    );
};

export default SideNavigation;