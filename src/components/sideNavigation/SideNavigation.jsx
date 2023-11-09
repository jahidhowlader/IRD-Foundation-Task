import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SideNavigation = () => {
    return (
        <div className='fixed bottom-0 xl:top-1/2 py-2 xl:px-4 xl:-translate-y-1/2 w-full xl:w-auto flex xl:flex-col items-end xl:items-center justify-center gap-[35px] xl:gap-[35px] bg-white xl:h-full z-30'>

            <Link href={'/'} className="bg-primary-color bg-opacity-10 rounded-md p-1.5 border border-primary-color border-opacity-10 cursor-pointer">
                <Image
                    src={'/home.png'}
                    alt="home icon"
                    width={24}
                    height={24}
                    className='w-5 2xl:w-6 h-auto'
                />
            </Link>
            <div className="bg-[#101010] bg-opacity-10 border border-black rounded-md p-1.5 border-opacity-0 cursor-pointer">
                <Link href={'#'}>
                    <Image
                        src={'/apps.png'}
                        alt="apps icon"
                        width={24}
                        height={24}
                        className=' w-5 2xl:w-6 h-auto'
                    />
                </Link>
            </div>
            <div className="bg-[#101010] bg-opacity-10 border border-black rounded-md p-1.5 border-opacity-0 cursor-pointer">
                <Image
                    src={'/Frame.png'}
                    alt="Frame icon"
                    width={20}
                    height={20}
                    className='w-5 2xl:w-6 h-auto'
                />
            </div>
            <div className="bg-[#101010] bg-opacity-10 border border-black rounded-md p-1.5 border-opacity-0 cursor-pointer">
                <Image
                    src={'/video-replay.png'}
                    alt="video icon"
                    width={20}
                    height={20}
                    className='w-5 2xl:w-6 h-auto'
                />
            </div>
            <div className="bg-[#101010] bg-opacity-10 border border-black rounded-md p-1.5 border-opacity-0 cursor-pointer">
                <Image
                    src={'/more.png'}
                    alt="more icon"
                    width={20}
                    height={20}
                    className='w-5 2xl:w-6 h-auto'
                />
            </div>
        </div>
    );
};

export default SideNavigation;