"use client"

import React, { useState } from 'react';
import LeftSidebar from './leftSidebar/LeftSidebar';
import MainContent from './MainContent';
import RightSidebar from './rightSidebar/RightSidebar';

const HomePage = () => {

    const [input, setInput] = useState(15)
    console.log(input);

    return (
        <section className='bg-white lg:pl-[70px] lg:pt-[55px] '>

            <div className='grid xl:grid-cols-5 2xl:grid-cols-6 gap-4 bg-[#EEF0F2] rounded-xl rounded-b-none pt-3 px-4 h-[calc(100vh-55px)]'>

                <aside className='xl:h-[545px] 2xl:h-[645px] bg-white rounded-xl overflow-hidden shadow-md'>
                    <LeftSidebar />
                </aside>

                <section className='xl:col-span-3 2xl:col-span-4 bg-white rounded-xl overflow-hidden h-[calc(100vh-100px)] pr-0.5'>
                    <MainContent input={input} />
                </section>

                <aside className='bg-white rounded-xl flex flex-col p-[15px] xl:h-[255px] 2xl:h-[295px]'>
                    <RightSidebar input={input} setInput={setInput} />
                </aside>
            </div>
        </section>
    );
};

export default HomePage;