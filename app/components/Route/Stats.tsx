import CountUp from 'react-countup';

type Props = {}
const stats = [
    { id: 1, name: 'Active Users', value: '1000+' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
const Stats = (props: Props) => {
  return (
    <>
    <div className="bg-white dark:bg-hsl-custom">
      

      <div className="relative isolate px-6 pt-10 lg:px-8">
        
        <div className="mx-auto max-w-2xl py-6 sm:py-8 lg:py-6">
          
          <div className="text-center">
          <h1 className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] dark:bg-hsl-custom text-[#010101] font-[700] tracking-tight">
          Impact Statistics <span className="text-[#a6a6a6] text-gradient"></span>{" "}
          
        </h1>
            <h1 className="text-4xl font-bold tracking-tight dark:text-gray-50 text-gray-900 sm:text-6xl">
              
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#a6a6a6]">
            Empowering Hundreds, One Institution at a Time: Witness the Impact.
            </p>
            
          </div>
        </div>
        {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
      </div>
    </div>
          <div className="bg-white dark:bg-hsl-custom">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 dark:text-gray-50 text-gray-600">Students Enrolled</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    <CountUp
                        start={0}
                        end={100}
                        duration={5}
                        suffix='+'
                        className=' dark:text-gray-50 text-black'
                        />
                    </dd>
                  </div>
                  <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 dark:text-gray-50 text-gray-600">Qualified Trainers</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    <CountUp
                        start={0}
                        end={20}
                        duration={5}
                        suffix='+'
                        className=' dark:text-gray-50 text-black'
                        />
                    </dd>
                  </div>
                  <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 dark:text-gray-50  text-gray-600">Partnered Medical Institutions</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    <CountUp
                        start={0}
                        end={20}
                        duration={5}
                        suffix='+'
                        className=' dark:text-gray-50 text-black'
                        />
                    </dd>
                  </div>
              </dl>
            </div>
          </div>
      
          </>
  )
}

export default Stats