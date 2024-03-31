import React from 'react'

type Props = {}

const Quality = (props: Props) => {
  return (
    <>
    
    <div className="py-16">
  <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
    <div className="bg-gray-50 dark:bg-hsl-custom dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
      <div className="md:5/12 lg:w-1/2">
        <img
          src="/assests/pie.svg"
          alt="image"
          loading="lazy"
          width=""
          height=""
        />
      </div>
      <div className="md:7/12 lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          500 Hospitals and Labs
have trusted us so far
        </h2>
        
        <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
          <div className="mt-8 flex gap-4 md:items-center">
            <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-gray-200">
              <img src="/assests/costeffective.png" className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400" alt="" />       
            </div>
            <div className="w-5/6">
              <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">Save on Costs, Ensure Success</h4>
              <p className="text-gray-500 dark:text-gray-400">Our Quality Manager ensures a smooth assessment process, winning the trust of assessors and saving labs and hospitals valuable resources.
</p>
            </div> 
          </div> 
          <div className="pt-4 flex gap-4 md:items-center">
            <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-gray-200">  
            <img src="/assests/success.png" className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400" alt="" />                                  
            </div>
            <div className="w-5/6">
              <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">Cost-Effective Documentation</h4>
              <p className="text-gray-500 dark:text-gray-400">Receive all necessary documents digitally, empowering labs and hospitals to handle future assessments independently, saving on consultancy fees and investing wisely in internal quality processes.
</p>
            </div> 
          </div> 
        </div>
      </div>
    </div>
  </div>
</div>
                                    
    </>
  )
}

export default Quality