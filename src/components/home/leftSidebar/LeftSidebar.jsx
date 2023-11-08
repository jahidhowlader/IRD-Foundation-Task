import Image from 'next/image';
import React from 'react';
import FruitList from './FruitList';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './LeftSidebar.css'


const LeftSidebar = () => {
    return (
        <>

            <Tabs className="">
                <TabList className='flex border border-primary-color border-opacity-10 rounded-[10px] p-0.5 bg-white bg-opacity-10 mt-4 mx-4'>
                    <Tab className="w-full text-center text-primary-color font-semibold py-2 text-xs 2xl:text-sm cursor-pointer rounded-[10px] bg-primary-color bg-opacity-10">Fruits</Tab>
                    <Tab className="w-full text-center text-primary-color font-semibold py-2 text-xs 2xl:text-sm cursor-pointer rounded-[10px] bg-primary-color bg-opacity-10">Vegetables</Tab>
                </TabList>

                <TabPanel>
                    {/* SEARCH INPUT */}
                    <div className=' p-[15px]'>
                        <div className="relative">
                            <input type="text" placeholder="Search by Food Name" className="xl:text-xs text-sm border border-[#F0F2F4] outline-none lg:w-full rounded-lg py-2 pl-4 pr-10 " />
                            <div className="absolute top-1/2 -translate-y-1/2 right-1 bg-primary-color border border-primary-color border-opacity-10 bg-opacity-10 rounded-md h-[80%] px-1.5 flex justify-center items-center">
                                <Image
                                    src={'/search.png'}
                                    alt="search icon"
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 "
                                />
                            </div>
                        </div>
                    </div>

                    <div className='pr-0.5'>
                        <p className='text-xs font-bold p-[10px] 2xl:p-[15px] pb-2.5 '>Fruits List</p>

                        <div className='lg:h-[560px] overflow-auto xl:pb-48 2xl:pb-32 2xl:pl-[15px] '>
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
                </TabPanel>
                <TabPanel>
                    <h2 className='text-center pt-5 font-bold'>No Content</h2>
                </TabPanel>
            </Tabs>

            {/* Tabs */}



        </>
    );
};

export default LeftSidebar;