"use client";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import NavItems from "../utils/NavItems";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import CustomModal from "../utils/CustomModal";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import Verification from "../components/Auth/Verification";
import Image from "next/image";
import avatar from "../../public/assests/avatar.png";
import { useSession } from "next-auth/react";
import { useLogOutQuery, useSocialAuthMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-hot-toast";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./Loader/Loader";
import Sift from "../../public/assests/qualityvedalogobright.png.png";
import Darkurl from "../../public/assests/logodark.png";
 


type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  
  route: string;
  setRoute: (route: string) => void;
};



const Header: FC<Props> = ({ setOpen, route, open, setRoute }) => {
    const [active, setActive] = useState(false);
  
  const {data:userData,isLoading,refetch} = useLoadUserQuery(undefined,{});
  const { data } = useSession();
  const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();
  const [logout, setLogout] = useState(false);
  const [currentLink,setCurrentLink]=useState('');
  const pathname = usePathname();
  const text1 = pathname?.split("/")[1];


   const { theme, setTheme } = useTheme();
   const [Shift,setShift] = useState(Sift);
   
   useEffect(()=>{
       if(theme==="light"){
        setShift(Sift)
       }
       else{
        setShift(Darkurl)
       }
   },[theme])
  
  useEffect(()=>{
    if(text1===''){
      setCurrentLink('home')
    }
    if(text1==='courses'){
      setCurrentLink('courses')
    }
    if(text1==='nabl'){
      setCurrentLink('nabl')
    }
    if(text1==='about'){
      setCurrentLink('about')
    }
    
  },[text1])
 
  const {} = useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  });
 
  useEffect(() => {
    if(!isLoading){
      if (!userData) {
        if (data) {
          socialAuth({
            email: data?.user?.email,
            name: data?.user?.name,
            avatar: data.user?.image,
          });
          refetch();
        }
      }
      if(data === null){
        if(isSuccess){
          toast.success("Login Successfully");
        }
      }
      if(data === null && !isLoading && !userData){
          setLogout(true);
      }
    }
  }, [data, userData,isLoading]);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  return (
    <>
    {
    isLoading ? (
      <Loader />
    ) : (
      <div className="w-full pb-2 dark:bg-hsl-custom bg-white relative">
        <div
        className={`${
          active
            ? "dark:bg-opacity-50 bg-white  pb-4 dark:bg-gradient-to-b dark:bg-hsl-custom fixed top-0 left-0 w-full h-[80px] z-[80] border-b  shadow-xl transition duration-500"
            : "w-full  dark:bg-hsl-custom  dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
        }`}
      >
    <nav className="  py-4 mx-12  flex justify-between  items-center md:px-8">
      {/* Left Section - Company Name */}
      <div className="sm:ml-0 mb-0 ml-4 md:ml-0">
        <Link href="/" className="">
            <Image src={Shift} width={100} height={100}  alt="Quality Veda Logo" />    
        </Link>
      </div>

      {/* Center Section - Navigation Links */}
      <div className="hidden lg:flex flex-grow justify-center space-x-8 ">
        <Link href="/" className={`font-semibold  hover:text-purple-600 ${currentLink==='home'?"text-purple-600":"text-[#a6a6a6] dark:text-gray-200"}` }>
          Home
        </Link>
        <Link href="/courses" className={`font-semibold  hover:text-purple-600 ${currentLink==='courses'?"text-purple-600":"text-[#a6a6a6] dark:text-[#a6a6a6]"}` }>
          Courses
        </Link>
        <Link href="/nabl" className={`font-semibold  hover:text-purple-600 ${currentLink==='nabl'?"text-purple-600":"text-[#a6a6a6] dark:text-[#a6a6a6]"}` }>
        NABL/NABH/CAP
        </Link>
        {/* <Link href="/qualitymanager" className="font-semibold text-gray-600 hover:text-purple-600">
          QM Desk
        </Link> */}
        <Link href="/about" className={`font-semibold  hover:text-purple-600 ${currentLink==='about'?"text-purple-600":"text-[#a6a6a6] dark:text-[#a6a6a6]"}` }>
          About Us
        </Link>
      </div>
     

 <ThemeSwitcher />
      {/* Right Section - Sign Up Button */}

      <div className="mr-4 md:mr-0">
      {userData ? (
                <Link href={"/profile"}>
                  <Image
                    src={userData?.user.avatar ? userData.user.avatar.url : avatar}
                    alt=""
                    width={30}
                    height={30}
                    className="w-[30px]  h-[30px] rounded-full cursor-pointer 2px solid #37a39a"
                    
                  />
                </Link>
              ) : (
                <button  onClick={() => setOpen(true)} className="neon bg-white text-purple-600 font-bold px-6 py-2 rounded-full border border-purple-600 text-sm">
          Login
        </button>
                
              )}
        
      </div>
      <NavItems 
       activeItem={currentLink} isMobile={true} />
      {route === "Login" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              
              component={Login}
              refetch={refetch}
            />
          )}
        </>
      )}

      {route === "Sign-Up" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
           
              component={SignUp}
            />
          )}
        </>
      )}

      {route === "Verification" && (
        <> 
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
            
              component={Verification}
            />
          )}
        </>
      )}
    </nav>
    
    </div>
    </div>
    )}
    </>
  );
};

export default Header;
