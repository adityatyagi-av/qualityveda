import CountUp from 'react-countup';

type Props = {}
const stats = [
    { id: 1, name: 'Active Users', value: '1000+' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
const Stats = (props: Props) => {
  return (
          <div className="bg-white py-6 sm:py-8 dark:bg-hsl-custom">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 dark:text-gray-50 text-gray-600">Active Users</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    <CountUp
                        start={0}
                        end={1000}
                        duration={8}
                        suffix='+'
                        className=' dark:text-gray-50 text-black'
                        />
                    </dd>
                  </div>
                  <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 dark:text-gray-50 text-gray-600">Courses</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    <CountUp
                        start={0}
                        end={50}
                        duration={8}
                        suffix='+'
                        className=' dark:text-gray-50 text-black'
                        />
                    </dd>
                  </div>
                  <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 dark:text-gray-50  text-gray-600">Total Users</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    <CountUp
                        start={0}
                        end={10000}
                        duration={8}
                        suffix='+'
                        className=' dark:text-gray-50 text-black'
                        />
                    </dd>
                  </div>
              </dl>
            </div>
          </div>
      
      
  )
}

export default Stats