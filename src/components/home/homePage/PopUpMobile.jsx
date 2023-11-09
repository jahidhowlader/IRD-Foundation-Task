"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import LeftSidebar from '../leftSidebar/LeftSidebar';
import { motion } from "framer-motion"

const mobileWidth = window.innerWidth < 450

const PopUpMobile = () => {

    // PopUp Code
    const [isClick, setIsClick] = useState(false)

    useEffect(() => {
        const closePopup = (event) => {
            if (isClick && event.target.closest('.popup-content') === null) {
                setIsClick(false);
            }
        };

        if (isClick) {
            document.body.addEventListener('click', closePopup);
        }

        return () => {
            document.body.removeEventListener('click', closePopup);
        };
    }, [isClick]);

    return (
        <>
            <div
                className='bg-white py-3 px-4 rounded-[10px] -mb-2 flex hus items-center justify-between xl:hidden'
                onClick={() => setIsClick(true)}
            >
                <div className='flex items-center gap-3'>
                    <div>
                        <Image
                            src={'/Group1.png'}
                            alt='Group1'
                            width={20}
                            height={20}
                            className='w-5 h-auto'
                        />
                    </div>
                    <h6 className='text-sm font-semibold'>Select Food Item</h6>
                </div>

                <div>
                    <Image
                        src={'/Frame1000003599.svg'}
                        alt='Group1'
                        width={20}
                        height={20}
                        className='w-5 h-auto'
                    />
                </div>
            </div>

            {
                isClick && (
                    <>
                        <motion.div
                            className='fixed top-0 left-0 w-full bg-opacity-40 h-full bg-black z-[998]'
                            initial={{ x: mobileWidth ? -450 : -500 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className='fixed top-0 left-0 w-10/12 bg-white  h-full rounded-2xl rounded-l-none z-[998] overflow-auto popup-content'
                                initial={{ x: mobileWidth ? -450 : -500 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 1, delay: .6 }}
                            >
                                <LeftSidebar />
                            </motion.div>
                        </motion.div>
                    </>
                )
            }
        </>
    );
};

export default PopUpMobile;