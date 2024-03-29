import Link from 'next/link'
import React from 'react'

type Props = {}

const AboutHero = (props: Props) => {
  return (
    

<header className="bg-white max-w-screen-xl mx-auto dark:bg-gray-900">
   

    <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Who We Are?<br/> </h1>
                    
                    <p className="mt-3 text-gray-600 dark:text-gray-400"><span className="text-3xl font-semibold  dark:text-white lg:text-4xl text-yellow-500 ">Quality Veda</span> is a leading platform offering a diverse array of training programs encompassing various medical standards, our platform serves as the School of Medical, bridging the gap between theoretical knowledge and practical application.</p>
                    
                  
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full lg:max-w-3xl" src="/assests/download.jpg" alt="About Quality Veda"/>
            </div>
        </div>
    </div>
</header>
  )
}

export default AboutHero