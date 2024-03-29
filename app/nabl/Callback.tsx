import React from 'react'

type Props = {}

const Callback = (props: Props) => {
  return (
    <>
   

<section className="bg-gray-100 dark:bg-hsl-custom">

  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <h1 className="text-center my-6 font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] dark:bg-hsl-custom text-[#000] font-[700] tracking-tight">
        Get a Callback  <span className="text-[#a6a6a6]  text-gradient"></span>{" "}
          
        </h1>
    <div className="grid  grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae aspernatur quisquam recusandae cum quos optio, ratione officiis culpa dicta ipsum, quam, repudiandae id. Exercitationem repellat illum harum, autem laborum enim vero, aliquid non natus eius debitis similique beatae ullam.
        </p>

        <div className="mt-8">
          <a href="#" className="text-2xl font-bold text-pink-600"> +91 888 250 9194 </a>

          <address className="mt-2 not-italic">206, 3rd Floor, Silver Home - 2, opposite 14th Avenue, Greater Noida, Ghaziabad, Uttar Pradesh 201301</address>
        </div>
      </div>

      <div className="rounded-lg bg-white dark:bg-hsl-custom p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="#" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

        

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Recieve Callback
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section></>
  )
}

export default Callback