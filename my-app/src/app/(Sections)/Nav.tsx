import React from 'react'
import Image from 'next/image'
type Props = {}

export default function Nav({ }: Props) {
    return (
        <div className='h-[60px] bg-black w-full '>
            <header className='flex items-center h-full'>
                <Image
                    src="/images/header.png"
                    alt="Hero Image"
                    width={140}
                    height={60}
                />
            </header>
        </div>
    )
}