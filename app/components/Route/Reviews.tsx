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
            <div className="lg:px-20 md:px-6 px-4 py-14">
                <div className="flex flex-col items-center justify-center">
                <h1 className="pb-6 text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] dark:bg-hsl-custom text-[#010101] font-[700] tracking-tight">
                See What Others Are Saying: <span className="text-[#a6a6a6] text-gradient">Real Stories, Real Results.</span>{" "}
          
        </h1>
                   
                </div>
                <div className=" overflow-hidden  md:max-w-screen-xl mx-auto">
                
  <Carousel
  plugins={[plugin.current]}
  onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
  
  className="w-full">
  <CarouselContent className="-ml-2 md:-ml-4">
    {reviews?.map((review)=>{
      return(
      <CarouselItem key={review._id} className="sm:basis-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-3" >
                            <div className="p-8 border rounded-lg text-gray-500 hover:bg-blue-900 hover:text-gray-50 shadow-md ">
                                <p className="leading-loose  ">
                                    {review.description}
                                </p>

                                <div className="flex items-center mt-8 -mx-2">
                                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-100" src={review.image.url} alt="" />

                                    <div className="mx-2">
                                        <h1 className="font-semibold">{review.name}</h1>
                                        <span className="text-sm">{review.company}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    
                
                

      </CarouselItem>
      )
    })}
    
     </CarouselContent>
 
</Carousel>
</div>
</div>
               
            </div>
       

  </>
  );
};

export default Reviews;
