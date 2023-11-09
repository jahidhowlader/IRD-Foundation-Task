"use client"

import React, { useState } from 'react';
import LeftSidebar from '../leftSidebar/LeftSidebar';
import MainContent from '../mainContent/MainContent';
import RightSidebar from '../rightSidebar/RightSidebar';
import PopUpMobile from './PopUpMobile';

const HomePage = () => {

    // text size state
    const [input, setInput] = useState(15)

    return (
        <section className='bg-white xl:pl-[70px] xl:pt-[55px] pt-16'>

            <div className='grid xl:grid-cols-5 2xl:grid-cols-6 gap-4 bg-[#EEF0F2] xl:rounded-xl xl:rounded-bl-none pt-3 px-3 xl:px-4 xl:h-[calc(100vh-55px)]'>

                {/* Popup for Mobile */}
                <PopUpMobile />

                {/* Left Sidebar */}
                <aside className='xl:h-[545px] 2xl:h-[645px] bg-white rounded-xl overflow-hidden shadow-2xl shadow-[#EEF0F2] hidden xl:block'>
                    <LeftSidebar />
                </aside>

                {/* Middle Or Main Content */}
                <section className='xl:col-span-3 2xl:col-span-4 bg-white rounded-xl xl:overflow-hidden mb-16 xl:mb-0 h-[calc(100vh-195px)] xl:h-[calc(100vh-100px)] pr-0.5 shadow-2xl shadow-[#EEF0F2]'>
                    <MainContent input={input} />
                </section>

                {/* Right Sidebar */}
                <aside className='bg-white rounded-xl xl:flex flex-col p-[15px] xl:h-[255px] 2xl:h-[295px] hidden shadow-2xl shadow-[#EEF0F2]'>
                    <RightSidebar input={input} setInput={setInput} />
                </aside>
            </div>
        </section>
    );
};

export default HomePage;