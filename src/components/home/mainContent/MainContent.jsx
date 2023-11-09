// "use client"

import Image from 'next/image';
import React from 'react';
import SocialLink from '../../socialLink/SocialLink';
import './MainContent.css'
import { Rating, RoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const ratingStyles = {
    itemShapes: RoundedStar,
    activeFillColor: '#E55527',
    activeStrokeColor: '#E55527',
    inactiveFillColor: '#fff',
    inactiveStrokeColor: '#f2aa93',
    itemStrokeWidth: 1,
}

const MainContent = ({ input }) => {

    return (
        <div className='p-3 xl:p-11 flex flex-col xl:flex-row gap-[42px] h-full overflow-auto'>

            {/* Social Link */}
            <div className='order-2 xl:order-1'>
                <SocialLink />
            </div>

            {/* Content */}

            <div className='order-1 xl:order-2'>

                <div className='flex flex-col xl:items-center gap-5 xl:gap-11 xl:flex-row'>
                    <div className='flex-1'>
                        <h2 className='text-2xl xl:text-3xl 2xl:text-[38px] font-extrabold heading-line-height pt-2 xl:pt-0'>Health Benefits Of An Avocado</h2>

                        <div className='py-3'>
                            <h6 className='text-lg font-bold'>Supports eye health: </h6>
                            <p style={{ fontSize: `${input}px` }} >Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                        </div>

                        <div className='py-3'>
                            <h6 className='text-lg font-bold'>Supports eye health: </h6>
                            <p style={{ fontSize: `${input}px` }} className='text-[15px]'>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                        </div>
                    </div>

                    {/* Content Image */}
                    <div className='flex-1'>
                        <Image
                            src={'/thumbnail1.png'}
                            alt='thumbnail'
                            width={520}
                            height={320}
                            className="xl:w-[325px] 2xl:w-[520px] h-auto "
                        />
                    </div>
                </div>

                <div className='py-3'>
                    <h6 className='text-lg font-bold'>Supports eye health: </h6>
                    <p style={{ fontSize: `${input}px` }} >Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. </p>
                </div>

                {/* Content Image */}
                <div className='flex flex-col xl:flex-row xl:items-center xl:gap-11 mt-5 xl:mt-11 mb-14'>
                    <div className='relative flex-1'>
                        <Image
                            src={'/thumbnail2.png'}
                            alt='thumbnail'
                            width={520}
                            height={320}
                            className="my-auto xl:w-[325px] 2xl:w-[520px] h-auto xl:pb-11 2xl:pb-0"
                            priority={true}
                        />
                    </div>

                    <div className='xl:py-3 flex-1'>
                        <h6 className='text-lg font-bold'>Supports eye health: </h6>
                        <p style={{ fontSize: `${input}px` }} className='text-[15px]'>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy </p>
                    </div>
                </div>

                {/* Review */}
                <div className='xl:py-16'>
                    <h6 className='text-lg font-bold pb-1  xl:pb-3'>Was this helpful?</h6>
                    <Rating
                        readOnly
                        style={{ maxWidth: 150 }}
                        value={4}
                        itemStyles={ratingStyles}
                    />

                </div>
            </div>

        </div>
    );
};

export default MainContent;