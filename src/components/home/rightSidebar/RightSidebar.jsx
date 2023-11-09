import Image from 'next/image';
import RangeInput from './RangeInput';

const RightSidebar = ({ input, setInput }) => {
    return (
        <div className='p-[10px] border border-[#E8E8E8] rounded-[10px] ' >

            <div className='xl:flex justify-between items-center'>
                <div className='flex items-center gap-2 2xl:gap-4'>
                    <Image
                        src={'/text-square.svg'}
                        width={20}
                        height={20}
                        alt='setting'
                        className='w-5 h-5 '
                    />
                    <p className='text-xs 2xl:text-sm text-primary-color font-semibold'>Settings</p>
                </div>

                <div>
                    <Image
                        src={'/upArrow.svg'}
                        width={20}
                        height={20}
                        alt='setting'
                        className='w-5 h-5 '
                    />
                </div>
            </div>


            {/* Range Input */}
            <RangeInput input={input} setInput={setInput} />


            {/* VITEAMIN TYPE */}
            <div>
                <label htmlFor="fruits" className='xl:text-xs 2xl:text-sm font-medium'>Choose a Vitamin Type:</label>

                <select name="All Vitamin" id="All Vitamin" className='xl:text-xs 2xl:text-sm py-[10px] px-4 mt-2 w-full rounded-[5px] outline-none bg-[#E8E8E8]'>
                    <option value="All Vitamin">All Vitamin</option>
                    <option value="Vitamin A">Vitamin A</option>
                    <option value="Vitamin B">Vitamin B</option>
                    <option value="Vitamin C">Vitamin C</option>
                </select>
            </div>

            {/* Turn Off Subtitle */}
            <div className='text-xs 2xl:text-sm flex justify-between items-center pt-4 2xl:pt-6 pb-3 2xl:pb-5 font-medium'>
                <p >Turn Off Subtitle</p>

                <div className='w-[30px] border h-[18px]  border-[#d9d9d9] rounded-full relative cursor-pointer'>

                    <div className='bg-[#d9d9d9] w-[14px] h-[14px] rounded-full absolute top-1/2 -translate-y-1/2 left-0.5'></div>

                </div>
            </div>
        </div>
    );
};

export default RightSidebar;