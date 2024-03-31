"use client"
import { styles } from "@/app/styles/style";
import Image from "next/image";

import ReviewCard from "../Review/ReviewCard";
import React, { useEffect, useState } from 'react'
import { useGetUsersAllTestimonialsQuery } from "@/redux/features/testimonials/testimonialApi";
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
type Props = {};


const Reviews = (props: Props) => {
    const {data}=useGetUsersAllTestimonialsQuery({});
    const [reviews, setReviews]=useState<any[]>([]);
    useEffect(() => {
        if (data) {
          setReviews(data.testimonials);
        }
      }, [data]);

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
  return (
   <>
        <div>
            <div className="lg:px-20 md:px-6 px-4 py-20">
                <div className="flex flex-col items-center justify-center">
                <h1 className="pb-6 text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] dark:bg-hsl-custom text-[#010101] font-[700] tracking-tight">
                See What Others Are Saying: <span className="text-[#a6a6a6] text-gradient">Real Stories, Real Results.</span>{" "}
          
        </h1>
                   
                </div>
                <div className=" overflow-hidden sm:overflow-visible md:max-w-screen-xl mx-auto">
                
  <Carousel
  plugins={[plugin.current]}
  onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
  
  className="w-full">
  <CarouselContent className="-ml-2 md:-ml-4">
    {reviews?.map((review)=>{
      return(
      <CarouselItem key={review._id} className="sm:basis-1 md:basis-1/2 lg:basis-1/2">
 
                    
                    <div className="lg:w-1/2 lg:mt-0 mt-16">
                        <div className="bg-white border rounded-md dark:border-gray-800 dark:bg-gray-900 border-gray-200 relative sm:p-10 p-6">
                            <div>
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg" alt="commas" />
                            </div>
                            <p className="text-base leading-6 text-gray-600 dark:text-gray-100 mt-4">{review.description}</p>
                            <div className="absolute bottom-0 -mb-4 ml-10">
                                
                            </div>
                        </div>
                        <div className="flex items-center mt-7">
                            <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                                <img src={review.image.url}className="w-10 h-10 rounded-full" alt={review.name} />
                            </div>
                            <div className="flex flex-col items-start ml-4">
                                <p className="text-base font-semibold leading-4 text-gray-800 dark:text-gray-200">{review.name}</p>
                                <p className="text-base leading-4 mt-2 text-center text-gray-600 dark:text-gray-400">{review.designation}</p>
                            </div>
                        </div>
                    </div>
                

      </CarouselItem>
      )
    })}
    
     </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
</div>
</div>
               
            </div>
       

  </>
  );
};

export default Reviews;
