import { useGetCourseDetailsQuery } from "@/redux/features/courses/coursesApi";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";

import CourseDetails from "./CourseDetails";


type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetCourseDetailsQuery(id);
  

  

 
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Heading
            title={data.course.name + " - ELearning"}
            description={
              "ELearning is a programming community which is developed helping programmers"
            }
            keywords={data?.course?.tags}
          />
          
          
            <CourseDetails
              data={data.course}
             
              setRoute={setRoute}
              setOpen={setOpen}
            />
       
         
        </div>
      )}
    </>
  );
};

export default CourseDetailsPage;
