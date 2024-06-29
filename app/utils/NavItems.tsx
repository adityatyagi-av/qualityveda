import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../../components/ui/sheet";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
export const navItemsData = [
  {
    name: "Home",
    url: "/",
    link:'home',
  },
  {
    name: "Courses",
    url: "/courses",
    link:'courses',
  },
  {
    name: "Live Courses",
    url: "/livecourses",
    link:'livecourses',
  },
  {
    name: "NABL/NABH/CAP",
    url: "/nabl",
    link:'nabl',
  },
  {
    name: "About Us",
    url: "/about",
    link:'about',
  },

  {
    name: "Contact Us",
    url: "/nabl#callback",
    link:'nabl',
  },
];

type Props = {
  activeItem: string;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
     
      {isMobile && (
        <div className="lg:hidden mt-5  ">
          <Sheet >
            <SheetTrigger className=""> 
            <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer dark:text-white  text-black"
                /></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="my-4">Quality Veda</SheetTitle>
              </SheetHeader>
              <nav className="flex items-center justify-center flex-col gap-7">

              
              {navItemsData&&navItemsData.map((item,index)=>(
             
                  <Link href={`${item.url}`} key={index} passHref>
                       <SheetClose asChild>
                <span
                  className={`${
                    activeItem === item.link ? "text-purple-600" : "text-black dark:text-gray-200"
                  } text-[18px] px-6 font-Poppins font-[400]`}
                >
                  {item.name}
                </span>
                </SheetClose>
              </Link>
                
              ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </>
  );
};

export default NavItems;