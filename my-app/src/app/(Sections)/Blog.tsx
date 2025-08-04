

import React from 'react';

type DataBlog = {
  id: string;
  title: string;
  description: string;
  category: string[];
  thumbnail: string;
  date: string;
};

type BlogResponse = {
  count: number;
  data: DataBlog[];
};

export default async function Blog() {
  const res = await fetch('https://recruit.cskmitl.com/blog/list',);

  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }

  const json: BlogResponse = await res.json();
  const data = json.data
  return (
    <div className='lg:w-[900px] mx-auto'>
  
      <div className='mx-2 my-8 flex justify-between'>
        <h1 className=' text-4xl font-bold text-white'>Blogs</h1>
        <button className='bg-white rounded-4xl p-2 text-base px-8 font-bold'>View all</button>
      </div>
      <div className='mx-auto  sm:w-3/4 xl:w-[900px] p-2 space-y-12'>
        {data.map((item) => (
          <div className='bg-white max-h-full   lg:flex rounded-4xl  ' key={item.id}>
            <div className='w-full   '>
              <img className=' object-cover w-full h-full rounded-b-none rounded-4xl lg:rounded-l-4xl lg:rounded-r-none    ' src={"https://recruit.cskmitl.com" + item.thumbnail} alt="" />
            </div>

            <div>

            </div>
            <div className='w-full flex flex-col justify-center ml-2 lg:ml-8 '>
              <div className='flex flex-wrap gap-x-3 mb-2 '>
                {item.category.map((name, i) => (

                  <p key={i} className='font-micro5  text-purple-600 text-3xl'> {name}</p>


                ))}
              </div>


              <p className='font-bold text-2xl lg:text-4xl '>{item.title}</p>
              <p className='mt-6 '>{item.description}</p>
              <button className='transition-all cursor-pointer border-orange-400 hover:border-2 hover:border-orange-400 border-2 hover:text-orange-400 hover:bg-amber-50 mt-8 mb-2 lg:ml-2 bg-orange-400 w-fit rounded-4xl text-black font-bold p-2 px-8'>Read more</button>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}
