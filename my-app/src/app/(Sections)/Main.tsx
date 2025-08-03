import React from 'react'
import Image from 'next/image'
import InfoHead from '../(Compornent)/InfoHead'
type Props = {}

export default function Main({ }: Props) {
    return (
        <div className='relative w-full h-[609px] '>
             <div className='w-full h-full absolute inset-0 -z-10'>
                <Image
                    src="/images/bgMain.png"
                    alt="Hero Image"
                    fill
                    priority
                   className='rounded-4xl '
                />
            </div>
            
            <InfoHead/>
           
            <div className='absolute z-10  -left-23 top-20 spin-custom'>
                <Image
                    src="/images/star1.png"
                    alt="1 Image"
                    width={55}
                    height={55}
                />
            </div>
            <div className='absolute z-10  -right-23 -top-10  spin-custom'>
                <Image
                    src="/images/star2.png"
                    alt="2 Image"
                    width={55}
                    height={55}
                />
            </div>

        </div>
    )
}