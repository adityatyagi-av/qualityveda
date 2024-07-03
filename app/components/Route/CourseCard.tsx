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
    console.log(item)
  const totalVideoLength=(item:any)=>{
    let length=0;
    item.courseData?.map((course:any)=>{
      length+=course.videoLength;
    })
    return length;
  }
  const totalLength=totalVideoLength(item);
  return (
    <>
  
<Link href={item.type==='livecourse' ? `/livecourse/${item._id}` : `course/${item._id}`}>

<div className="group relative rounded-3xl  space-y-6 overflow-hidden">
        <Image
          className="mx-auto h-[32rem] w-full grayscale-[0%] object-cover object-top ransition duration-500 group-hover:scale-100 group-hover:grayscale-0"
          src={item?.thumbnail?.url}
          alt="woman"
          loading="lazy"
          width="640"
          height="805"
        />
        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 translate-y-36 transition duration-300 ease-in-out group-hover:translate-y-20">
          <div>
            <h4 className="text-xl font-semibold  text-gray-300">{item.name}</h4>
            <div className="flex py-2 justify-between">
            <span className="block text-sm text-gray-200">{item.purchased} learners</span>
           
            {item.type!=='livecourse'&&  <span className="block text-sm text-gray-200">{totalLength} minutes</span>}
               
            </div>
            
            
            <div className="flex flex-cols py-1">
            <div>
              <button className="bg-yellow-500 w-[100px] h-[35px] rounded-3xl">
              <h3 className="text-black font-semibold leading-6	text-xl  dark:text-[#fff]">
              {item.price === 0 ? "Free" :  "₹ "+item.price}
            </h3>
              </button>
              </div>
              <div className="justify-centent mt-3 ml-3">
            {item.estimatedPrice && <h5 className="pl-1 text-[14px] mt-[-5px] line-through opacity-80 text-white dark:text-[#fff]">
            ₹ {item.estimatedPrice}
            </h5> }
            </div>
            
            
            
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
