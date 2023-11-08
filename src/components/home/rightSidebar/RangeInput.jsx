const RangeInput = ({input, setInput}) => {

    // const [input, setInput] = useState(14)

    return (
        <>
            <div className='text-xs 2xl:text-sm flex justify-between items-center pt-4 2xl:pt-6 pb-3 2xl:pb-5 font-medium'>
                <p >Paragraph font size</p>
                <p className='text-primary-color'>{input}</p>
            </div>

            <div>
                <input type="range" value={input} min={7} max={100} onChange={((e) => setInput(e.target.value))} className='w-full text-black bg-black cursor-pointer' />
            </div>
        </>
    );
};

export default RangeInput;