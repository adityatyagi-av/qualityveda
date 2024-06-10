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
        
        <div className="mx-auto max-w-6xl py-6 sm:py-8 lg:py-6">
          
          <div className="text-center">
          <h1 className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] dark:bg-hsl-custom text-[#010101] font-[700] tracking-tight">
          Impact Statistics: <span className="text-[#a6a6a6] text-gradient"> Empowering Hundreds, One Institution at a Time: Witness the Impact.</span>{" "}
          
        </h1>
          
          
            
          </div>
        </div>
      
      </div>
    </div>
          <div className=" bg-white mt-14 dark:bg-hsl-custom">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 dark:text-gray-50 text-gray-600">Students Enrolled</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    <CountUp
                        start={0}
                        end={100}
                        duration={20}
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
                        duration={20}
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
                        duration={20}
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