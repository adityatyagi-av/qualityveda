import Link from "next/link";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useState ,useEffect} from "react";
type Props = {
   
};

const Footer = (props: Props) => {
    const { data, isLoading } = useGetUsersAllCoursesQuery({});
    const [courses, setCourses] = useState<any[]>([]);
    useEffect(() => {
        setCourses(data?.courses);
      }, [data]);
    
  return (
    <>
   <footer className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-12 mx-auto">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
            <h1 className="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl dark:text-white">Ready for Expert Advice? <span className="text-[#a6a6a6]">Request a Call Back Now!</span></h1>
            
            <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
                <Link href="/nabl#callback" className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    <span>Get Callback</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </div>
        </div>
        
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"/>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                    <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Courses</a>
                    <Link href="/privacypolicy" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Privacy Policy</Link>
                    <Link href="/refundpolicy" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Refund Policy</Link>
                    <Link href="/terms" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Terms and Conditions</Link>
                </div>
            </div>

           

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Courses</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                {courses &&
            courses.map((item: any, index: number) => (
                <Link key={index} href={ `/course/${item._id}`} className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">{item.name}</Link>
            ))}
                   
                    
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Contact Us</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">+91 888 250 9194
</a>
                    <a href="mailto:connect@qualityveda.co " className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">connect@qualityveda.co </a>
                    <span  className="text-gray-600 transition-colors duration-300 dark:text-gray-300  ">206, 3rd Floor, Silver Home - 2, opposite 14th Avenue, Greater Noida, Ghaziabad, Uttar Pradesh 201301</span>
                </div>
            </div>
        </div>
        
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"/>
        
        <div className="flex flex-col items-center justify-between sm:flex-row">
            <a href="#">
              <span className="text-2xl text-black">Quality Veda</span>
            </a>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">© 2024 All rights reversed. Just kidding, they{`'`}re all still reserved.</p>
        </div>
    </div>
</footer>
    </>
  );
};

export default Footer;
