import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            
            <h2 className="max-w-lg mb-6  dark:text-gray-50  font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative  dark:text-gray-50  inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 dark:text-gray-50 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="  dark:text-gray-50  relative">How</span>
              </span>{' '}
              does Quality Veda imporves your learning
            </h2>
            <p className="text-base  dark:text-gray-300  text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
            <div className="flex flex-col justify-center">
              <div className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full dark:text-black bg-indigo-50">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 font-semibold leading-5">
                    They urge you to put down
                  </h6>
                  <p className="text-sm dark:text-gray-300 text-gray-900">
                    Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
                    flail 180 berm. Half-cab camel back ollie transition ledge Wes
                    Humpston 1080.
                  </p>
                  <hr className="w-full my-6 border-gray-300" />
                </div>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full dark:text-black bg-indigo-50">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 font-semibold leading-5">
                    The powerless in a world
                  </h6>
                  <p className="text-sm dark:text-gray-300 text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem fugit, in fuga praesentium nulla magnam cum ea velit eum perspiciatis quaerat iste tempora aut.
                  </p>
                  <hr className="w-full my-6 border-gray-300" />
                </div>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full dark:text-black bg-indigo-50">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 font-semibold leading-5">
                    Tell them I hate them
                  </h6>
                  <p className="text-sm dark:text-gray-300 text-gray-900">
                    Chase ball of string eat plants, meow, and throw up because I
                    ate plants going to catch the red dot today going to catch the
                    red dot today. I could pee on this if I had the energy.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <img
                className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
    
  )
}

export default About