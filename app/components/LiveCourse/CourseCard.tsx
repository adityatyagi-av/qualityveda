import Ratings from "@/app/utils/Ratings";

import Link from "next/link";
import React, { FC } from "react";


type Props = {
  item: any;
  isProfile?: boolean;
};

const CourseCard: FC<Props> = ({ item, isProfile }) => {
  
  return (
    <>
  
<Link href={!isProfile ? `/livecourse/${item._id}` : `live-course-access/${item._id}`}>

<div className="group relative rounded-3xl  space-y-6 overflow-hidden">
        <img
          className="mx-auto h-[26rem] w-full grayscale-[50%] object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          src={item?.thumbnail?.url}
          alt="woman"
          loading="lazy"
          width="640"
          height="805"
        />
        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 className="text-xl font-semibold  text-gray-300">{item.name}</h4>
            <div className="flex py-2 justify-between">
            <span className="block text-sm text-gray-200">{item.purchased} learners</span>
          
            </div>
            
            
            <div className="flex py-1">
            <h3 className="text-white font-semibold leading-6	text-xl  dark:text-[#fff]">
              {item.price === 0 ? "Free" :  "₹ "+item.price}
            </h3>
            {item.estimatedPrice && <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-white dark:text-[#fff]">
            ₹ {item.estimatedPrice}
            </h5> }
            
          </div>
          </div>
          <p className="mt-8 text-gray-300">
  {item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description}
</p>
        </div>
        
      </div></Link>
    
    </>
  );
};

export default CourseCard;
