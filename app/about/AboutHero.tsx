import Link from 'next/link'
import React from 'react'

type Props = {}

const AboutHero = (props: Props) => {
  return (
    
<div className="bg-white mx-auto max-w-screen-xl dark:bg-hsl-custom overflow-hidden relative lg:flex lg:items-center">
    <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
                About QualityVeda Courses
            </span>
        </h2>
        <p className="text-md mt-4 text-gray-400">
            The state of Utah in the united states is home to lots of beautiful National parks, Bryce national canion park ranks as three of the most magnificient &amp; awe inspiring.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            
        </div>
    </div>
    <div className="flex items-center gap-8 p-8 lg:p-24">
        <img src="/assests/download.jpg" className="w-1/2 rounded-lg" alt="Tree"/>
        <div>
            <img src="/assests/download.jpg" className="mb-8 rounded-lg" alt="Tree"/>
            <img src="/assests/download.jpg" className="rounded-lg" alt="Tree"/>
        </div>
    </div>
</div>

  )
}

export default AboutHero