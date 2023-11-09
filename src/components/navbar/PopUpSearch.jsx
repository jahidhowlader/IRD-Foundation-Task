"use client"

import { useEffect } from "react";
import { motion } from "framer-motion"

const PopUpSearch = ({ isFind, setIsFind }) => {

    useEffect(() => {
        const closePopup = (event) => {
            if (isFind && event.target.closest('.popup-content') === null) {
                setIsFind(false);
            }
        };

        if (isFind) {
            document.body.addEventListener('click', closePopup);
        }

        return () => {
            document.body.removeEventListener('click', closePopup);
        };
    }, [isFind, setIsFind]);

    return (
        <>
            {
                isFind && (
                    <>
                        <div className='fixed bg-black w-full h-full top-0 left-0 bg-opacity-60 flex justify-center items-center z-[999]'>
                            <motion.div
                                className='bg-white p-5 rounded-[5px] shadow-lg text-black w-3/12 relative popup-content'
                                initial={{ y: 450  }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.5 }}
                            >

                                {/* Input Search */}
                                <div className='relative flex justify-center items-center h-full mt-8'>
                                    <input type="text" className='border-2 border-primary-color border-opacity-50 w-full rounded-[5px] py-3 pr-3 pl-10 outline-none' placeholder="Search Foods" />
                                </div>

                                {/* Recent Search */}
                                <div className='py-5'>
                                    <p>Recent</p>

                                    <ul className='mt-1 border border-[#E8E8E8] border-b-0 cursor-pointer rounded-[5px]'
                                        onClick={() => setIsFind(false)}
                                    >
                                        <span className='flex justify-between items-center border-b border-[#E8E8E8] hover:bg-priborder-primary-color hover:bg-primary-color hover:bg-opacity-10 py-3 px-3'>
                                            <li className=' '>Fruits</li>
                                            <button className="text-xs"
                                            >close</button>
                                        </span>

                                        <span className='flex justify-between items-center border-b border-[#E8E8E8] hover:bg-priborder-primary-color hover:bg-primary-color hover:bg-opacity-10 py-3 px-3'>
                                            <li className=' '>Vegitable</li>
                                            <button className="text-xs">close</button>
                                        </span>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )
            }
        </>
    );
};

export default PopUpSearch;