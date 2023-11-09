"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import FruitList from './FruitList';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './LeftSidebar.css'


const LeftSidebar = () => {

    const [tab, setTabs] = useState('fruits')


    return (
        <>
            <div className='flex border border-primary-color border-opacity-10 m-4 rounded-[10px]'>

                {/* Tabs */}
                <div
                    className={`w-full py-1.5 xl:py-[10px] flex-1 text-center m-0.5 rounded-md font-semibold cursor-pointer ${tab === 'fruits' ? 'bg-primary-color bg-opacity-10 text-primary-color' : ''}`}
                    onClick={() => setTabs('fruits')}
                >
                    <p>Fruits</p>
                </div>

                <div
                    className={`w-full py-1.5 xl:py-[10px] flex-1 text-center m-0.5 rounded-md font-semibold cursor-pointer ${tab === 'vegitables' ? 'bg-primary-color bg-opacity-10 text-primary-color' : ''}`}
                    onClick={() => setTabs('vegitables')}
                >
                    <p>Vegitables</p>
                </div>
            </div>

            {/* SEARCH INPUT */}
            <div className=' p-[15px] pt-0'>
                <div className="relative">
                    <input type="text" placeholder="Search by Food Name" className="xl:text-xs text-sm border border-[#F0F2F4] outline-none w-full rounded-lg py-2 pl-4 pr-10 " />
                    <div className="absolute top-1/2 -translate-y-1/2 right-1 bg-primary-color border border-primary-color border-opacity-10 bg-opacity-10 rounded-md h-[80%] px-1.5 flex justify-center items-center">
                        <Image
                            src={'/search.png'}
                            alt="search icon"
                            width={20}
                            height={20}
                            className="w-5 h-auto "
                        />
                    </div>
                </div>
            </div>


            {/* Tabs Result*/}
            {
                tab === 'fruits' ? (
                    <>
                        <div className='pr-0.5'>
                            <p className='text-xs font-bold pl-5 2xl:p-[15px] pb-2.5 '>Fruits List</p>

                            <div className='xl:h-[560px] xl:overflow-auto xl:pb-40 2xl:pb-20 pl-5 xl:pl-3 2xl:pl-[15px] '>
                                <FruitList img={'/orange.png'} name={'Oranges'} vitamin={'Vitamin C'} bg={'bg-[#ffe6c3]'} />
                                <FruitList img={'/apple.png'} name={'Apples'} vitamin={'Vitamin C'} bg={'bg-primary-color bg-opacity-[.15]'} />
                                <FruitList img={'/avocado.png'} name={'Avocado'} vitamin={'Vitamin B6'} bg={'bg-[#e8ecdf]'} />
                                <FruitList img={'/avocado.png'} name={'Strawberries'} vitamin={'Vitamin B6'} bg={'bg-[#e8ecdf]'} />
                                <FruitList img={'/avocado.png'} name={'Mangoes'} vitamin={'Vitamin B'} bg={'bg-[#e8ecdf]'} />
                                <FruitList img={'/avocado.png'} name={'Grapes'} vitamin={'Vitamin C, K'} bg={'bg-[#e8ecdf]'} />
                                <FruitList img={'/avocado.png'} name={'Blueberries'} vitamin={'Vitamin K'} bg={'bg-[#e8ecdf]'} />
                                <FruitList img={'/avocado.png'} name={'Grapes'} vitamin={'Vitamin C, K'} bg={'bg-[#e8ecdf]'} />
                                <FruitList img={'/avocado.png'} name={'Pineapples'} vitamin={'Vitamin B'} bg={'bg-[#e8ecdf]'} />
                                <FruitList img={'/avocado.png'} name={'Grapes'} vitamin={'Vitamin C, K'} bg={'bg-[#e8ecdf]'} />
                                <FruitList img={'/avocado.png'} name={'Papayas'} vitamin={'Vitamin A'} bg={'bg-[#e8ecdf]'} />
                                <FruitList img={'/avocado.png'} name={'Grapes'} vitamin={'Vitamin B'} bg={'bg-[#e8ecdf]'} />
                                <FruitList img={'/avocado.png'} name={'Strawberries'} vitamin={'Vitamin B'} bg={'bg-[#e8ecdf]'} />
                                <FruitList img={'/avocado.png'} name={'Grapes'} vitamin={'Vitamin B'} bg={'bg-[#e8ecdf]'} />
                                <FruitList img={'/avocado.png'} name={'Pineapples'} vitamin={'Vitamin B'} bg={'bg-[#e8ecdf]'} />
                                <FruitList img={'/avocado.png'} name={'Papayas'} vitamin={'Vitamin A'} bg={'bg-[#e8ecdf]'} />
                                <FruitList img={'/avocado.png'} name={'Strawberries'} vitamin={'Vitamin B'} bg={'bg-[#e8ecdf]'} />
                            </div>
                        </div>
                    </>
                ) : <h2 className='text-center pt-5 font-bold'>No Content</h2>
            }


        </>
    );
};

export default LeftSidebar;
