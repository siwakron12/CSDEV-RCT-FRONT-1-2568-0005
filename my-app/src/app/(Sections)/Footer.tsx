import React from 'react'
import Image from 'next/image'
type Props = {}

export default function Footer({ }: Props) {
    return (
        <div className='bg-purple-custom lg:h-[253px] max-h-[253px] rounded-4xl  px-2 sm:px-12 py-4 lg:py-8 lg:pt-14 flex flex-col justify-between mt-56'>
            <div>
                <Image
                    src="/images/header.png"
                    alt="Hero Image"
                    width={200}
                    height={60}
                />
                </div>
                <p className='text-white text-xs sm:text-base'>Ⓒ Copyright 2025 CSDEV KMITL. All rights reserved.</p>
        </div>
    )
}