// "use client";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import React, { FC, useEffect, useState } from "react";
// import NavItems from "../utils/NavItems";
// import { ThemeSwitcher } from "../utils/ThemeSwitcher";
// import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
// import CustomModal from "../utils/CustomModal";
// import Login from "../components/Auth/Login";
// import SignUp from "../components/Auth/SignUp";
// import Verification from "../components/Auth/Verification";
// import Image from "next/image";
// import avatar from "../../public/assests/avatar.png";
// import { useSession } from "next-auth/react";
// import { useLogOutQuery, useSocialAuthMutation } from "@/redux/features/auth/authApi";
// import { toast } from "react-hot-toast";
// import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
// import Loader from "./Loader/Loader";

import { Button } from "@mui/material"

// type Props = {
//   open: boolean;
//   setOpen: (open: boolean) => void;
//   activeItem: number;
//   route: string;
//   setRoute: (route: string) => void;
// };

// const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
//   const [active, setActive] = useState(false);
//   const [openSidebar, setOpenSidebar] = useState(false);
//   const {data:userData,isLoading,refetch} = useLoadUserQuery(undefined,{});
//   const { data } = useSession();
//   const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();
//   const [logout, setLogout] = useState(false);
//   const pathname = usePathname();
//   const text1 = pathname?.split("/")[1];
//   console.log(typeof text1);
 
//   const {} = useLogOutQuery(undefined, {
//     skip: !logout ? true : false,
//   });
 
  

//   useEffect(() => {
//     if(!isLoading){
//       if (!userData) {
//         if (data) {
//           socialAuth({
//             email: data?.user?.email,
//             name: data?.user?.name,
//             avatar: data.user?.image,
//           });
//           refetch();
//         }
//       }
//       if(data === null){
//         if(isSuccess){
//           toast.success("Login Successfully");
//         }
//       }
//       if(data === null && !isLoading && !userData){
//           setLogout(true);
//       }
//     }
//   }, [data, userData,isLoading]);

//   if (typeof window !== "undefined") {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 85) {
//         setActive(true);
//       } else {
//         setActive(false);
//       }
//     });
//   }

//   const handleClose = (e: any) => {
//     if (e.target.id === "screen") {
//       {
//         setOpenSidebar(false);
//       }
//     }
//   };

//   return (
//    <>
//    {
//     isLoading ? (
//       <Loader />
//     ) : (
//       <div className="w-full relative">
//       <div
//         className={`${
//           active
//             ? "dark:bg-opacity-50 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
//             : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
//         }`}
//       >
//         <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
//           <div className="w-full h-[80px] flex items-center justify-between p-3">
//             <div>
//               <Link
//                 href={"/"}
//                 className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}
//               >
//                 Quality Veda
//               </Link>
//             </div>
//             <div className="flex items-center">
//               <NavItems activeItem={activeItem} isMobile={false} />
//               <ThemeSwitcher />
//               {/* only for mobile */}
//               <div className="800px:hidden">
//                 <HiOutlineMenuAlt3
//                   size={25}
//                   className="cursor-pointer dark:text-white text-black"
//                   onClick={() => setOpenSidebar(true)}
//                 />
//               </div>
//               {userData ? (
//                 <Link href={"/profile"}>
//                   <Image
//                     src={userData?.user.avatar ? userData.user.avatar.url : avatar}
//                     alt=""
//                     width={30}
//                     height={30}
//                     className="w-[30px] h-[30px] rounded-full cursor-pointer"
//                     style={{border: activeItem === 5 ? "2px solid #37a39a" : "none"}}
//                   />
//                 </Link>
//               ) : (
//                 <HiOutlineUserCircle
//                   size={25}
//                   className="hidden 800px:block cursor-pointer dark:text-white text-black"
//                   onClick={() => setOpen(true)}
//                 />
//               )}
//             </div>
//           </div>
//         </div>

//         {/* mobile sidebar */}
//         {openSidebar && (
//           <div
//             className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
//             onClick={handleClose}
//             id="screen"
//           >
//             <div className="w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
//               <NavItems activeItem={activeItem} isMobile={true} />
//               {userData?.user ? (
//                 <Link href={"/profile"}>
//                   <Image
//                     src={userData?.user.avatar ? userData.user.avatar.url : avatar}
//                     alt=""
//                     width={30}
//                     height={30}
//                     className="w-[30px] h-[30px] rounded-full ml-[20px] cursor-pointer"
//                     style={{border: activeItem === 5 ? "2px solid #37a39a" : "none"}}
//                   />
//                 </Link>
//               ) : (
//                 <HiOutlineUserCircle
//                   size={25}
//                   className="hidden 800px:block cursor-pointer dark:text-white text-black"
//                   onClick={() => setOpen(true)}
//                 />
//               )}
//               <br />
//               <br />
//               <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
//                 Copyright © 2023 ELearning
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//       {route === "Login" && (
//         <>
//           {open && (
//             <CustomModal
//               open={open}
//               setOpen={setOpen}
//               setRoute={setRoute}
//               activeItem={activeItem}
//               component={Login}
//               refetch={refetch}
//             />
//           )}
//         </>
//       )}

//       {route === "Sign-Up" && (
//         <>
//           {open && (
//             <CustomModal
//               open={open}
//               setOpen={setOpen}
//               setRoute={setRoute}
//               activeItem={activeItem}
//               component={SignUp}
//             />
//           )}
//         </>
//       )}

//       {route === "Verification" && (
//         <>
//           {open && (
//             <CustomModal
//               open={open}
//               setOpen={setOpen}
//               setRoute={setRoute}
//               activeItem={activeItem}
//               component={Verification}
//             />
//           )}
//         </>
//       )}
//     </div>
//     )
//    }
//    </>
//   );
// };

// export default Header;

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className=" pt-8 mx-12  flex justify-between items-center md:px-8">
      {/* Left Section - Company Name */}
      <div className="ml-4 md:ml-0">
        <Link href="/" className="text-2xl font-bold text-black">
          Quality Veda
        </Link>
      </div>

      {/* Center Section - Navigation Links */}
      <div className="hidden md:flex flex-grow justify-center space-x-8">
        <Link href="/" className="font-semibold text-gray-600 hover:text-purple-600">
          Home
        </Link>
        <Link href="/courses" className="font-semibold text-gray-600 hover:text-purple-600">
          Courses
        </Link>
        <Link href="/nabl" className="font-semibold text-gray-600 hover:text-purple-600">
        NABL/NABH/CAP
        </Link>
        {/* <Link href="/qualitymanager" className="font-semibold text-gray-600 hover:text-purple-600">
          QM Desk
        </Link> */}
        <Link href="/about" className="font-semibold text-gray-600 hover:text-purple-600">
          About Us
        </Link>
      </div>

      {/* Right Section - Sign Up Button */}
      <div className="mr-4 md:mr-0">
        <button className="neon bg-white text-purple-600 font-bold px-6 py-2 rounded-full border border-purple-600 text-sm">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;