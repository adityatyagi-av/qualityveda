"use client";
import React, { FC, useEffect, useState } from "react";
import SideBarProfile from "./SideBarProfile";
import { useLogOutQuery } from "../../../redux/features/auth/authApi";
import { signOut } from "next-auth/react";
import ProfileInfo from "./ProfileInfo";
import ChangePassword from "./ChangePassword";
import CourseCard from "../Course/CourseCard";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useGetUsersAllLiveCoursesQuery } from "@/redux/features/livecourses/livecoursesApi";
import CertificateCard from "../Course/CertificateCard";
import CertificateCard2 from "../LiveCourse/CertificateCard";
import CourseCard2 from "../LiveCourse/CourseCard";

type Props = {
  user: any;
};

const Profile: FC<Props> = ({ user }) => {
  const [scroll, setScroll] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [logout, setLogout] = useState(false);
  const [courses, setCourses] = useState([]);
  const [livecourses,setLiveCourses]=useState([]);
  const [livecertificates,setLiveCertificates]=useState([]);
  const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
  const { data:data2, isLoading:isLoading2 } = useGetUsersAllLiveCoursesQuery(undefined, {});
  const {} = useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  });

  const [active, setActive] = useState(1);

  const logOutHandler = async () => {
    setLogout(true);
    await signOut();
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  useEffect(() => {
    if (data) {
      const filteredCourses = user.courses.map((userCourse: any) =>
          data.courses.find((course: any) => course._id === userCourse._id)
        )
        .filter((course: any) => course !== undefined);
      setCourses(filteredCourses);
    }
   if(data2){
   
const fileteredLiveCourses=user.livecourses.map((userCourse:any)=>
        data2.courses.find((course:any)=>course._id===userCourse._id)
        ).filter((course:any)=>course!==undefined);
        setLiveCourses(fileteredLiveCourses)


        const filteredCertificate=user.livecertificate.map((certificate:any)=>
          data2.courses.find((course:any)=>course._id===certificate.courseId))
          .filter((course:any)=>course!==undefined);
          setLiveCertificates(filteredCertificate)
        
   }
   
    
  }, [data,data2]);


  return (
    <div className="w-[85%] flex mx-auto">
      <div
        className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-opacity-90 border bg-white dark:border-[#ffffff1d] border-[#00000014] rounded-[5px] shadow-sm dark:shadow-sm mt-[80px] mb-[80px] sticky ${
          scroll ? "top-[120px]" : "top-[30px]"
        } left-[30px]`}
      >
        <SideBarProfile
          user={user}
          active={active}
          avatar={avatar}
          setActive={setActive}
          logOutHandler={logOutHandler}
        />
      </div>
      {active === 1 && (
        <div className="w-full h-full bg-transparent mt-[80px]">
          <ProfileInfo avatar={avatar} user={user} />
        </div>
      )}

      {active === 2 && (
        <div className="w-full h-full bg-transparent mt-[80px]">
          <ChangePassword />
        </div>
      )}


      {active === 3 && (
        <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[80px]">
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
            {courses &&
              courses.map((item: any, index: number) => (
                <CourseCard item={item} key={index} isProfile={true} />
              ))}
          </div>
          {courses.length === 0 && (
            <h1 className="text-center text-[18px] font-Poppins dark:text-white text-black">
              You don&apos;t have any purchased courses!
            </h1>
          )}
          
        </div>
      )}
      {active === 7 && (
        <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[80px]">
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
            {courses &&
              courses.map((item: any, index: number) => (
                <CertificateCard item={item} key={index} user={user} isProfile={true} />
              ))}
          </div>
          {courses.length === 0 && (
            <h1 className="text-center text-[18px] font-Poppins dark:text-white text-black">
              You don&apos;t have any certificates
            </h1>
          )}
          
        </div>
      )}
      {active === 5 && (
        <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[80px]">
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-3 1500px:gap-[35px] mb-12 border-0">
            {livecourses &&
              livecourses.map((item: any, index: number) => (
                <CourseCard2 item={item} key={index} isProfile={true} />
              ))}
          </div>
          {livecourses.length === 0 && (
            <h1 className="text-center text-[18px] font-Poppins dark:text-white text-black">
              You don&apos;t have any purchased Live courses!
            </h1>
          )}
          
        </div>
      )}
      {active === 8 && (
        <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[80px]">
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
            {livecertificates &&
              livecertificates.map((item: any, index: number) => (
                
                    <CertificateCard2 item={item} key={index} user={user} isProfile={true} />
              ))}
          </div>
          {livecertificates.length === 0 && (
            <h1 className="text-center text-[18px] font-Poppins dark:text-white text-black">
              You don&apos;t have any Live Course Certificate!
            </h1>
          )}
          
        </div>
      )}
    </div>
  );
};

export default Profile;
