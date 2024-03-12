import Ratings from "@/app/utils/Ratings";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";

type Props = {
  item: any;
  isProfile?: boolean;
};

const CourseCard: FC<Props> = ({ item, isProfile }) => {
  return (
    <>
    {/* <Link href={!isProfile ? `/course/${item._id}` : `course-access/${item._id}`} className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
  <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
    <Image width={500} height={500} className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={item?.thumbnail?.url} alt="Image Description"/>
  </div>
  <div className="p-2 md:p-3">
    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
    {item.name}
    </h3>
    <div className="w-full flex items-center justify-between pt-2">
          <Ratings rating={item.ratings} />
          <h5
            className={`text-black dark:text-[#fff] ${
              isProfile && "hidden 800px:inline"
            }`}
          >
            {item.purchased} Students
          </h5>
        </div>
        <div className="w-full flex items-center justify-between pt-3">
          <div className="flex">
            <h3 className="text-black dark:text-[#fff]">
              {item.price === 0 ? "Free" :  "₹ "+item.price}
            </h3>
            <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-black dark:text-[#fff]">
            ₹ {item.estimatedPrice}
            </h5>
          </div>
          <div className="flex items-center pb-3">
            <AiOutlineUnorderedList size={20} fill="#fff" />
            <h5 className="pl-2 text-black dark:text-[#fff]">
              {item.courseData?.length} Lectures
            </h5>
          </div>
        </div>
  </div>
</Link> */}
<Link href={!isProfile ? `/course/${item._id}` : `course-access/${item._id}`}>

<div className="group relative rounded-3xl  space-y-6 overflow-hidden">
        <img
          className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          src={item?.thumbnail?.url}
          alt="woman"
          loading="lazy"
          width="640"
          height="805"
        />
        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 className="text-xl font-semibold dark:text-gray-700 text-white">{item.name}</h4>
            <div className="flex py-2 justify-between">
            <span className="block text-sm text-gray-200">{item.purchased} learners</span>
            <span className="block text-sm text-gray-200">56.5 hr</span>
            </div>
            
            
            <div className="flex py-1">
            <h3 className="text-white dark:text-[#fff]">
              {item.price === 0 ? "Free" :  "₹ "+item.price}
            </h3>
            <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-white dark:text-[#fff]">
            ₹ {item.estimatedPrice}
            </h5>
          </div>
          </div>
          <p className="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
        </div>
        
      </div></Link>
    
    </>
  );
};

export default CourseCard;
