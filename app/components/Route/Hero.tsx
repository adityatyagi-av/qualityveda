'use client';
import Link from "next/link";
import React, { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import Loader from "../Loader/Loader";
type Props = {

}

const Hero:FC<Props> = (props) =>{
  const [search,setSearch] = useState("");
  const router = useRouter()
  const handleSearch = () => {
    if(search === ""){
     return
    }else{
     router.push(`/courses?title=${search}`);
    }
   }



return (



  <> <div>
     <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
       <Image src={require("../../../public/assests/laptop.png")} alt=""  className= "object-cover object-right w-full h-auto lg:w-auto lg:h-full"/>
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              
              <h2 className=" max-w-lg mb-8 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none dark:text-white">
              Secure your ideal 
                <br className="hidden md:block" />
               
                Internship / Job{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  online
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              SpringBee is an experiential platform designed to help you overcome the challenge of having no experience and break the cycle of no job on your resume.
              </p>
            </div>
            <form>
              <div className="flex  md:flex-row">
                <input
                  placeholder="Search Courses ...."
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
                <div className=" flex items-center justify-center w-[50px] cursor-pointer h-[48px] ] bg-[#39c1f3] rounded-r-[5px]"
          onClick={handleSearch}
          >
            <BiSearch className="text-white" size={30} />
          </div>
               
              </div>
              <div className="flex items-center mt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-950 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Join Now
              </button>
                <Link
                   href="/courses"
                  
                  className="dark:text-white inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  View Courses
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div></>

   
)

}

export default Hero;
