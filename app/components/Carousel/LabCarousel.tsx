"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
import ImageCard from "../Card/ImageCard"
import React, { useEffect, useState } from 'react'
import Autoplay from "embla-carousel-autoplay"
import { useGetUsersAllLabsQuery } from "@/redux/features/labs/labApi"

type Props = {}

const LabCarousel = (props: Props) => {

  const {data}=useGetUsersAllLabsQuery({});
  const [labs,setLabs]=useState<any[]>([]);
  useEffect(() => {
    if (data) {
      setLabs(data.labs);
      
    }
  }, [data]);
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
  return (
    <div className=" overflow-hidden max-w-screen-xl mx-auto">
  <Carousel
  plugins={[plugin.current]}
  onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
  
  className="sm:max-w-screen-sm md:max-w-screen-md overflow-x-hidden lg:max-w-screen-lg xl:max-w-screen-xl">
  <CarouselContent className="sm:-ml-4">
    {labs?.map((lab)=>{
      return(
      <CarouselItem key={lab._id} className="sm:basis-3/4 md:basis-1/3 lg:basis-1/4"><ImageCard  imageLink={lab.image.url} url={lab.link}/></CarouselItem>
      )
    })}
    
     </CarouselContent>
  
</Carousel>
</div>
  )
}

export default LabCarousel