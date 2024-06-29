"use client"
import { useGetUsersAllLabsQuery } from '@/redux/features/labs/labApi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type Props = {}

const List = (props: Props) => {
    
  const {data}=useGetUsersAllLabsQuery({});
  const [labs,setLabs]=useState<any[]>([]);
  useEffect(() => {
    if (data) {
      setLabs(data.labs);
      
    }
  }, [data]);
  return (
    <>
    <h1 className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] dark:bg-hsl-custom text-[#000] font-[700] tracking-tight mb-6 md:mb-10">
        Our partner: <span className="text-[#a6a6a6]  text-gradient">Institutions, Labs, Hospitals etc...</span>{" "}
          
        </h1>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
{labs?.map((lab)=>{
      return(
    <Link href={lab.link} key={lab._id}>
        
    <Image width={400} height={400} className="h-40 rounded-lg" src={lab.image.url} alt="" objectFit='cover'/>
</Link>

      )
    })}


</div>
</>
  )
}

export default List