"use client";
import React, { FC, useEffect, useState } from "react";
import Heading from "./utils/Heading";


import Courses from "./components/Route/Courses";
import Reviews from "./components/Route/Reviews";
import Stats from "./components/Route/Stats";
import MainHero from "./components/Route/MainHero";

import FAQ from "./components/FAQ/FAQ";
import LabCarousel from "./components/Carousel/LabCarousel";

interface Props {}

const Page: FC<Props> = (props) => {


  return (
    <div className="dark:bg-hsl-custom">
      <Heading
        title="Quality Veda"
        description="Quality Veda is a platform for students to learn and get help from teachers"
        keywords=""
      />
      <MainHero/>
      <Courses />
     
        <h1 className="text-center mt-10 mb-5 font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] dark:bg-hsl-custom text-[#000] font-[700] tracking-tight">
        Our partner: <span className="text-[#a6a6a6]  text-gradient">Institutions, Labs, Hospitals etc...</span>{" "}
          
        </h1>
      <LabCarousel/>
      
     

      <Stats/>
      
      <Reviews />
      <FAQ/>
      {/* <Contact/> */}
     
    </div>
  );
};

export default Page;
