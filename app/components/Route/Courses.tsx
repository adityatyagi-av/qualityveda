import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useGetUsersAllLiveCoursesQuery } from "@/redux/features/livecourses/livecoursesApi";
import CourseCard from "./CourseCard";

type Props = {};

const Courses = (props: Props) => {
  const { data: coursesData, isLoading: loading } = useGetUsersAllCoursesQuery(undefined, {});
  const { data: liveCoursesData, isLoading: loadingLiveCourses } = useGetUsersAllLiveCoursesQuery(undefined, {});
  const threeCourse = ['6678f5add64288c76c335391', '6661dbd9d64288c76c32f2ff', '662c865fa3963d378417b84b'];
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    if (!loading && !loadingLiveCourses && coursesData && liveCoursesData) {
      const selectedCourses: any[] = [];

      threeCourse.forEach((id) => {
        const course = coursesData.courses?.find((course: any) => course._id === id);
        if (course) {
          selectedCourses.push({ ...course, type: 'course' });
        } else {
          const liveCourse = liveCoursesData.courses?.find((course: any) => course._id === id);
          if (liveCourse) {
            selectedCourses.push({ ...liveCourse, type: 'livecourse' });
          }
        }
      });

      setCourses(selectedCourses);
     
    }
  }, [loading, loadingLiveCourses, coursesData, liveCoursesData]);

  if (loading || loadingLiveCourses) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dark:bg-hsl-custom">
      <div className={`w-[90%] 800px:w-[80%] m-auto`}>
        <h1 className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] dark:bg-hsl-custom text-[#000] font-[700] mb-4 tracking-tight">
          Upgradation Programs: <span className="text-[#a6a6a6] text-gradient">Choose what{`'`}s best for you</span>
        </h1>
        <br />
        <br />
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-3 1500px:gap-[35px] mb-12 border-0">
          {courses.map((item: any, index: number) => (
            <CourseCard item={item} key={index} />
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="courses"
            className="rounded-md hover:cursor-pointer bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View All Courses →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
