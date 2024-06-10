"use client";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import Heading from "../utils/Heading";
import { styles } from "../styles/style";
import CourseCard from "../components/Course/CourseCard";
import Search from "../components/Route/Searchbar";

type Props = {};

const Page = (props: Props) => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("title");
  const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
  const { data: categoriesData } = useGetHeroDataQuery("Categories", {});
  
  const [courses, setcourses] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    if (category === "All") {
      setcourses(data?.courses);
    }
    if (category !== "All") {
      setcourses(
        data?.courses.filter((item: any) => item.categories === category)
      );
    }
    if (search) {
      setcourses(
        data?.courses.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [data, category, search]);

  const categories = categoriesData?.layout?.categories;

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
            <div className="w-full flex items-center flex-wrap">
            
              <div
                className={`h-[35px] ${
                  category === "All" ? "bg-[#1b1b1b] dark:bg-[#ffffff] dark:text-black text-white" : "bg-[#ebebeb] dark:bg-[#555555] dark:text-white text-black"
                } m-3 px-3 rounded-[30px] flex items-center  justify-center font-Poppins cursor-pointer`}
                onClick={() => setCategory("All")}
              >
                All
              </div>
              
              {categories &&
                categories.map((item: any, index: number) => (
                  <div key={index}>
                    <div
                      className={`h-[35px] ${
                        category === item.title
                          ? "bg-[#1b1b1b] dark:bg-[#ffffff] dark:text-black text-white"
                          : "bg-[#ebebeb] dark:bg-[#555555] dark:text-white text-black"
                      } m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer`}
                      onClick={() => setCategory(item.title)}
                    >
                      {item.title}
                    </div>
                    
                  </div>
                  
                ))}
                <Search/>
            </div>
            {
                courses && courses.length === 0 && (
                    <p className={`${styles.label} justify-center min-h-[50vh] flex items-center`}>
                    {search ? "No courses found!" : "No courses found in this category. Please try another one!"}
                  </p>
                )
            }
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
