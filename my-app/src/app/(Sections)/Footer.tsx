import React from 'react'
import Image from 'next/image'
type Props = {}

export default function Footer({ }: Props) {
    return (
        <div className='mt-56 bg-purple-custom lg:h-[253px] max-h-[253px] px-8 lg:px-12 py-4 lg:py-12 rounded-4xl     flex flex-col justify-between '>
            <div className='w-[180px] lg:w-[250px] h-[78px]'>
                <img
                    src="/images/header.svg"
                    alt="Hero Image"
                    className="w-full h-full object-contain"
                />
            </div>
            <p className=' text-white text-xs sm:text-[20px]'>Ⓒ Copyright 2025 CSDEV KMITL. All rights reserved.</p>
        </div>
    )
}