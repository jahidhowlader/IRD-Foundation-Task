import Image from "next/image";

export default function NotFound() {
    return (
        <section className='bg-white xl:pl-[70px] xl:pt-[55px] pt-16'>

            <div className='bg-[#EEF0F2] xl:rounded-xl xl:rounded-b-none pt-3 px-3 xl:px-4 h-[calc(100vh-100px)] xl:h-[calc(100vh-55px)]'>

                <div className="bg-white h-[calc(100vh-135px)] xl:h-[calc(100vh-100px)] rounded-xl">
                    <div className="h-full flex flex-col justify-center items-center">
                        <Image
                            src={'/404.png'}
                            alt="404"
                            width={526}
                            height={300}
                            className="xl:w-[526px] h-auto"
                        />
                        <h3 className=" xl:text-[28px] font-bold pt-10">This Page is Empty</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}