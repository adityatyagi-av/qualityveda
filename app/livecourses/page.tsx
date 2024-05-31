"use client";
import { useGetUsersAllLiveCoursesQuery } from "@/redux/features/livecourses/livecoursesApi";

import { useSearchParams } from "next/navigation";
import { useState,useEffect } from "react";
import Loader from "../components/Loader/Loader";
import Heading from "../utils/Heading";
import CourseCard from "../components/LiveCourse/CourseCard";


type Props = {};

const Page = (props: Props) => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("title");
  const { data, isLoading } = useGetUsersAllLiveCoursesQuery(undefined, {});
  
  
  const [courses, setcourses] = useState([]);
  useEffect(() => {
    
      setcourses(data?.courses);

    
  }, [data]);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          
          <div className="w-[95%] 800px:w-[85%] m-auto min-h-[70vh]">
          <Heading
        title="Live Courses QualityVeda | Elevate Your Laboratory Quality with ISO 15189 Training | About Quality Veda | Leading Medical Training Platform"
        description=" Quality Veda is your premier destination for diverse medical training programs, bridging theoretical knowledge with practical application. Discover our mission to elevate healthcare standards and our vision for excellence in patient care."
        keywords="ISO 15189 training.	4 days iso 15189 training,	Laboratory quality control,	Quality manager training,	quality manager certification online,	ISO 15189 certification,	Quality management systems,	Laboratory accreditation,	Internal quality control,	ISO 15189 version 2022 pdf,	Medical laboratory training,	ISO 15189 consultant,	iso 15189 version 2022 training,	iso 15189 version 2022 certificate,	Quality assurance in healthcare,	Pathology laboratory training,	Clinical laboratory standards, ISO 15189 checklist, Laboratory quality improvement, ISO 15189 courses, Phlebotomy training , Laboratory quality management , NABL Accreditation"
      />
            <br />
            

            <br />
            <br />
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-3 1500px:gap-[35px] mb-12 border-0">
              {courses &&
                courses.map((item: any, index: number) => (
                  <CourseCard item={item} key={index} />
                ))}
            </div>
          </div>
          
        </>
      )}
    </div>
  );
};

export default Page;
