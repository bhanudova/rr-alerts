import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { jobInfo } from '@/constraints/data'
const JobComponent = () => {

    return (
        <div className='bg-[#E8E8E8] dark:bg-[#09090B]'>
            <div className='px-3 md:px-10 py-8 '>
                <h2 className=' font-extrabold border-b-2 border-green-600 w-fit uppercase text-sm md:text-base lg:text-lg'>Latest Jobs Updates</h2>
                <div className='mt-4 grid grid-cols-1 gap-8'>
                    {
                        jobInfo.map((data: any, i: number) => (
                            <div key={i} className='bg-white/80 dark:bg-[#121C22] dark:shadow-lg shadow-green-900 p-4 rounded-lg space-y-2'>
                                <Image src={data.imgURL} width={300} height={300} alt={data.imgURL} className='w-44 border border-black/10 dark:border-blue-50 p-2  md:w-52 object-contain rounded-md' />
                                <h2 className='font-bold text-sm md:text-base lg:text-base'>{data.title}</h2>
                                <p className='text-xs md:text-sm lg:text-base'>
                                    <span className='font-extrabold'>Role: </span>{data.description}
                                </p>
                                <button className='bg-blue-500 p-1 text-xs md:text-sm lg:text-base font-medium px-2 rounded-md text-white'>
                                    <Link href={''}>Read More</Link>
                                </button>
                                <p className='text-xs md:text-sm lg:text-base'>
                                    {data.date}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default JobComponent