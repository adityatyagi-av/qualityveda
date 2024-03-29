import React from 'react'
import { HeroNabl } from './HeroNabl'
import Link from 'next/link'

type Props = {}

const MainHero = (props: Props) => {
  return (
    <>
<div className="  xl:container max-w-screen-xl mx-auto px-6 md:px-12">
    
    <div className="relative lg:flex lg:items-center lg:gap-12">
        <div className="text-center lg:text-left  sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
            <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">Get you lab accredited only with our <span className="text-primary dark:text-primaryLight">NABL Consultancy</span></h1>
            <p className="mt-8 text-gray-600 dark:text-gray-300">Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
            <div className='flex justify-center items-center my-6'>
            <Link href="#callback" className="relative items-center inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 dark:bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  &#128222; Get a Call Back 
  </span>
</Link>
            </div>
           
        </div>
        <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
            <HeroNabl/>
        </div>
    </div>
</div> 
                                     
    </>
  )
}

export default MainHero