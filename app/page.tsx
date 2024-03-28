"use client";
import React, { FC, useEffect, useState } from "react";
import Heading from "./utils/Heading";

import Hero from "./components/Route/Hero";
import Courses from "./components/Route/Courses";
import Reviews from "./components/Route/Reviews";

import Stats from "./components/Route/Stats";
import Contact from "./components/Route/Contact";
import MainHero from "./components/Route/MainHero";

import Slider from "./components/Route/Slider";
import FAQ from "./components/FAQ/FAQ";

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
      <Slider/>
      <Hero />

      <Stats/>
      <FAQ/>
      <Reviews />
      
      {/* <Contact/> */}
     
    </div>
  );
};

export default Page;
