import { useGetLiveCourseDetailsQuery } from "@/redux/features/livecourses/livecoursesApi";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";

import CourseDetails from "./CourseDetails";


type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {

  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetLiveCourseDetailsQuery(id);
  

  

 
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Heading
            title={data.course.name + " - QualityVeda"}
            description={
              "Quality Veda is your premier destination for diverse medical training programs, bridging theoretical knowledge with practical application. Discover our mission to elevate healthcare standards and our vision for excellence in patient care."
            }
            keywords={data?.course?.tags}
          />
          
          
            <CourseDetails
              data={data.course}
             
              setOpen={setOpen}
            />
       
         
        </div>
      )}
    </>
  );
};

export default CourseDetailsPage;
