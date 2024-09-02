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
        title="QualityVeda | Best ISO-15189 and Quality Control Training"
        description="Welcome to QualityVeda! Enhance your laboratory's performance with our expert ISO 15189 training. Master quality control and accreditation to deliver top-notch patient care."
        keywords="ISO 15189 training,
        4 days iso 15189 training ,
        Laboratory quality control,
        Quality manager training,
        quality manager certification online,
        ISO 15189 certification,
        Quality management systems,
        Laboratory accreditation,
        Internal quality control,
        ISO 15189 version 2022 pdf,
        Medical laboratory training,
        ISO 15189 consultant,
        iso 15189 version 2022 training,
        iso 15189 version 2022 certificate,
        Quality assurance in healthcare,
        Pathology laboratory training,
        Clinical laboratory standards,
        ISO 15189 checklist,
        Laboratory quality improvement,
        ISO 15189 courses,
        Phlebotomy training,
        Laboratory quality management,
        NABL Accreditation
        "
      />
      <MainHero/>
      <Courses />
     
        <h1 className="text-center mt-16 mb-14 font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] dark:bg-hsl-custom text-[#000] font-[700] tracking-tight">
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
