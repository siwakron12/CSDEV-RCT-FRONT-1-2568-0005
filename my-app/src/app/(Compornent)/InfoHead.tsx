import React from 'react'
import Image from 'next/image'

type Props = {}

export default function InfoHead({ }: Props) {
    return (
        <div className=" p-6 lg:p-12 w-full max-h-full h-[609px] flex justify-center items-center relative">
            <section className='bg-white rounded-4xl h-full w-full   md:flex '>
                <div className=' p-4 sm:p-6 flex flex-col     lg:h-full  '>
                    <div className=' w-full   h-full'>
                        <h1 className="text-3xl md:text-[64px] font-semibold">Pineapple_ </h1>
                        <h2 className="text-2xl    md:text-[26px] mt-4">
                            Considered Space for Design Discourse.
                        </h2>
                        <p className="sm:mt-4 text-[18px] sm:text-[20px]    w-full ">
                            A little corner of the internet for exploring the juicy parts of
                            web design and UX. Want in on the fun? Join the newsletter!
                        </p>
                    </div>
                    <button className=" transition-all cursor-pointer border-2 mt-4 md:mt-auto lg:mb-4 hover:border-2 border-purple-600 hover:bg-white hover:text-purple-600  bg-purple-600 text-white w-fit rounded-3xl p-2 px-6 font-bold ">
                        Join the Mailing List
                    </button>
                </div>

                <div className="flex justify-center md:justify-start     items-end   md:items-end md:w-3/4 md:h-full  md:relative ">
                    <div className=" w-[120px] h-[190px] sm:w-[200px] sm:h-[250px] md:w-[214px] md:h-[374px]  relative md:-bottom-8.5 ">
                        <Image
                            src="/images/face.png"
                            alt="Hero Image"
                            fill
                            className="object-contain "
                        />
                    </div>
                </div>
            </section>


        </div>
    )
}
