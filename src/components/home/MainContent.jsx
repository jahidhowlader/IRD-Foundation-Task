"use client"

import Image from 'next/image';
import React from 'react';
import SocialLink from '../socialLink/SocialLink';

const MainContent = ({ input }) => {

    return (
        <div className='p-11 flex gap-[42px] h-full overflow-auto'>

            {/* Social Link */}
            <SocialLink />

            {/* Content */}

            <div>

                {/* Content Image */}
                <div className='relative'>
                    <Image
                        src={'/thumbnail1.png'}
                        // fill
                        alt='thumbnail'
                        width={520}
                        height={320}
                        className="float-right xl:w-[325px] 2xl:w-[520px] h-auto ml-11 mb-11"
                    />
                </div>

                {/* Main Title */}
                <h2 style={{lineHeight: '45px'}} className='xl:text-3xl 2xl:text-[38px] font-extrabold'>Health Benefits Of An Avocado</h2>

                <div className='py-3'>
                    <h6 className='text-lg font-bold'>Supports eye health: </h6>
                    <p style={{ fontSize: `${input}px` }} >Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                </div>

                <div className='py-3'>
                    <h6 className='text-lg font-bold'>Supports eye health: </h6>
                    <p style={{ fontSize: `${input}px` }}  className='text-[15px]'>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                </div>

                <div className='py-3'>
                    <h6 className='text-lg font-bold'>Supports eye health: </h6>
                    <p style={{ fontSize: `${input}px` }} >Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. </p>
                </div>

                {/* Content Image */}
                <div className=' xl:flex items-center mt-11 mb-14'>
                    <div className='relative flex-1'>
                        <Image
                            src={'/thumbnail2.png'}
                            // fill
                            alt='thumbnail'
                            width={520}
                            height={320}
                            className="my-auto xl:w-[325px] 2xl:w-[520px] 2xl:h-auto pr-11 xl:pb-11 2xl:pb-0"
                            priority={true}
                        />
                    </div>

                    <div className='py-3 flex-1'>
                        <h6 className='text-lg font-bold'>Supports eye health: </h6>
                        <p style={{ fontSize: `${input}px` }}  className='text-[15px]'>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy </p>
                    </div>
                </div>

                {/* TODO: Review */}
                <div className='py-16'>
                    <h6 className='text-lg font-bold'>Was this helpful?</h6>
                </div>
            </div>

        </div>
    );
};

export default MainContent;