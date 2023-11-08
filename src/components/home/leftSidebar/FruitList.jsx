import Image from 'next/image';
import React from 'react';

const FruitList = ({ img, name, vitamin, bg, opacity }) => {
    return (
        <div className='hover:border hover:border-primary-color border border-black border-opacity-0 rounded-[10px] cursor-pointer'>
            <div className='flex items-center p-3 gap-4'>
                <div className={`${bg} ${opacity} rounded-[11px] rotate-45`}>

                    <Image
                        src={img}
                        alt="fruits"
                        width={40}
                        height={40}
                        className='w-10 h-10 -rotate-45'
                    />
                </div>

                <div>
                    <p className='text-sm font-medium'>{name}</p>
                    <p className='text-xs opacity-70'>{vitamin}</p>
                </div>
            </div>
        </div>
    );
};

export default FruitList;