"use client";
import React, { FC, useEffect, useState } from "react";
import CourseInformation from "./CourseInformation";
import CourseOptions from "./CourseOptions";
import CourseData from "./CourseData";
import CourseContent from "./CourseContent";
import CoursePreview from "./CoursePreview";
import { useEditLiveCourseMutation, useGetAllLiveCoursesQuery } from "../../../../redux/features/livecourses/livecoursesApi";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";

type Props = {
    id: string;
};

const EditCourse:FC<Props> = ({id}) => {
    const [editCourse,{isSuccess,error}] = useEditLiveCourseMutation();
    const { data, refetch } = useGetAllLiveCoursesQuery(
        {},
        { refetchOnMountOrArgChange: true }
      );
    
      const editCourseData = data && data.courses.find((i:any) => i._id === id);
      
  useEffect(() => {
    if (isSuccess) {
      toast.success("Course Updated successfully");
      redirect("/admin/courses");
    }
    if (error) {
      if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [isSuccess, error]);


  const [active, setActive] = useState(0);

  useEffect(() => {
    if (editCourseData) {
      setCourseInfo({
        name: editCourseData.name,
        description: editCourseData.description,
        price: editCourseData.price,
        estimatedPrice: editCourseData?.estimatedPrice,
        tags: editCourseData.tags,
        level: editCourseData.level,
        link:editCourseData.link,
        demoUrl: editCourseData.demoUrl,
        startDate:editCourseData.startDate,
        endDate:editCourseData.endDate,
        thumbnail: editCourseData?.thumbnail?.url,
      })
      setBenefits(editCourseData.benefits);
      setPrerequisites(editCourseData.prerequisites);
      
    }
  }, [editCourseData]);


  const [courseInfo, setCourseInfo] = useState({
    name: "",
    description:  "",
    price:  "",
    estimatedPrice:  "",
    tags: "",
    level:  "",
    link:"",
    startDate:"",
    endDate:"",
    demoUrl:  "",
    thumbnail:  "",
  });
  const [benefits, setBenefits] = useState([{ title: "" }]);
  const [prerequisites, setPrerequisites] = useState([{ title: "" }]);
 

  const [courseData, setCourseData] = useState({});


  const handleSubmit = async () => {
    // Format benefits array
    const formattedBenefits = benefits.map((benefit) => ({
      title: benefit.title,
    }));
    // Format prerequisites array
    const formattedPrerequisites = prerequisites.map((prerequisite) => ({
      title: prerequisite.title,
    }));

    // Format course content array
    

    //   prepare our data object
    const data = {
      name: courseInfo.name,
      description: courseInfo.description,
      link:courseInfo.link,
      price: courseInfo.price,
      estimatedPrice: courseInfo.estimatedPrice,
      tags: courseInfo.tags,
      thumbnail: courseInfo.thumbnail,
      level: courseInfo.level,
      startDate:courseInfo.startDate,
      endDate:courseInfo.endDate,
      demoUrl: courseInfo.demoUrl,
      benefits: formattedBenefits,
      prerequisites: formattedPrerequisites,
      
    };

    setCourseData(data);
  };


  const handleCourseCreate = async (e: any) => {
    const data = courseData;
    await editCourse({id:editCourseData?._id,data});
  };

  return (
    <div className="w-full flex min-h-screen">
      <div className="w-[80%]">
        {active === 0 && (
          <CourseInformation
            courseInfo={courseInfo}
            setCourseInfo={setCourseInfo}
            active={active}
            setActive={setActive}
          />
        )}

        {active === 1 && (
          <CourseData
            benefits={benefits}
            setBenefits={setBenefits}
            prerequisites={prerequisites}
            setPrerequisites={setPrerequisites}
            active={active}
            setActive={setActive}
            handleSubmit={handleSubmit}
          />
        )}

       

        {active === 2 && (
          <CoursePreview
            active={active}
            setActive={setActive}
            courseData={courseData}
            handleCourseCreate={handleCourseCreate}
            isEdit={true}
          />
        )}
      </div>
      <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0">
        <CourseOptions active={active} setActive={setActive}  />
      </div>
    </div>
  );
};

export default EditCourse;
