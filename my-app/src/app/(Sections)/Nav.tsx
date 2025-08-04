import React from 'react'
import Image from 'next/image'
type Props = {}

export default function Nav({ }: Props) {
    return (
        <div className='h-[60px] w-full '>
           
            <header className='flex items-center h-full ml-4 lg:ml-0'>
                <Image
                    src="/images/header.svg"
                    alt="Hero Image"
                    width={154}
                    height={48}
                />
            </header>
        </div>
    )
}