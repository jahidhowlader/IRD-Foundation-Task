import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SocialLink = () => {
    return (
        <div className='flex xl:flex-col gap-[22px] xl:pt-[60px] pb-5'>
            <div className='w-7'>
                <Link href={'https://www.facebook.com/jahidhowlader.info'} target='_blank'>
                    <Image
                        src={'/facebook.svg'}
                        width={28}
                        height={28}
                        alt='facebook'
                        className='w-7 h-7'
                    />
                </Link>
            </div>
            <div className='w-7'>
                <Link href={'https://www.linkedin.com/in/jahidhowlader'} target='_blank'>
                    <Image
                        src={'/linkedin.svg'}
                        width={28}
                        height={28}
                        alt='linkedin'
                        className='w-7 h-7'
                    />
                </Link>
            </div>
            <div className='w-7'>
                <Link href={'https://www.twitter.com/jahidhowlader10'} target='_blank'>
                    <Image
                        src={'/twitter.svg'}
                        width={28}
                        height={28}
                        alt='twitter'
                        className='w-7 h-7'
                    />
                </Link>
            </div>
            <div className='w-7'>
                <Link href={'https://jahidhowlader.vercel.app/'} target='_blank'>
                    <Image
                        src={'/link.svg'}
                        width={28}
                        height={28}
                        alt='link'
                        className='w-7 h-7'
                    />
                </Link>
            </div>
        </div>
    );
};

export default SocialLink;