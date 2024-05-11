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
              title={"All courses - Elearning"}
              description={"Elearning is a programming community."}
              keywords={
                "programming community, coding skills, expert insights, collaboration, growth"
              }
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
