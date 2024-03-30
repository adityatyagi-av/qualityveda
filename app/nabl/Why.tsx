import React from 'react'

type Props = {}

const Why = (props: Props) => {
  return (
    <>
    
    <div className="py-16 max-w-screen-xl mx-auto">
  <div className="xl:container m-auto space-y-16 px-6 text-gray-500 md:px-12">
    <div>
    <h1 className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] dark:bg-hsl-custom text-[#000] font-[700] tracking-tight">
        Why QualityVeda? <span className="text-[#a6a6a6]  text-gradient">One Stop Solution for all the problems</span>{" "}
          
        </h1>
    </div>
    <div className="md:-mx-8 mt-16 grid gap-8 lg:gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <div className="group relative p-8 rounded-3xl bg-white dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent border border-gray-100 lg:border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
        <div className="relative">
          <img
            src="/assests/cost.png"
            className="w-10"
            width="512"
            height="512"
            alt="package-delivery illustration"
          />
          <h3 className="mt-8 mb-4 text-2xl font-semibold text-gray-800 transition dark:text-white">
            COST-EFFECTIVE SOLUTIONS: 
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
          Save over 50% of your expenses with DiagRuk. We provide a dedicated Quality Manager during audits, conduct Internal Audits at no extra cost, and furnish all necessary documentation in digital format, eliminating the need for additional consultancy fees.
          </p>
        </div>
      </div>
      <div className="group relative p-8 rounded-3xl bg-white dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent border border-gray-100 lg:border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
        <div className="relative">
          <img
            src="/assests/time.png"
            className="w-10"
            width="512"
            height="512"
            alt="package-delivery illustration"
          />
          <h3 className="mt-8 mb-4 text-2xl font-semibold text-gray-800 transition dark:text-white">
         RAPID ACCREDITATION:
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
          Achieve NABL and NABH accreditation within just 3 months. Our experienced Quality Managers streamline the process, ensuring a smooth and efficient journey towards accreditation.
          </p>
        </div>
      </div>
      <div className="group relative p-8 rounded-3xl bg-white dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent border border-gray-100 lg:border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
        <div className="relative">
          <img
            src="/assests/quality.png"
            className="w-10"
            width="512"
            height="512"
            alt="package-delivery illustration"
          />
          <h3 className="mt-8 mb-4 text-2xl font-semibold text-gray-800 transition dark:text-white">
      ENHANCED QUALITY:
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
          Elevate your service quality with our comprehensive staff training programs. We equip your team with the skills they need to deliver exceptional services, enhancing customer satisfaction and reducing the need for future consultancy services.
          </p>
        </div>
      </div>
      
    </div>
  </div>
</div>
                                    
                                    
    </>
  )
}

export default Why