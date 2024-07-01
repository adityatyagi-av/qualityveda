import { FC,useState,useEffect } from "react";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const MainHero:FC<Props> = (props: Props) => {
  const { data, isLoading } = useGetHeroDataQuery("Banner", {});
  
  const [content, setContent] = useState<any>();
  useEffect(() => {
    setContent(data?.layout);

    console.log(data)
  }, [data]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSearch = (e:any) => {
    e.preventDefault();
    if (search === "") {
      return;
    } else {
      router.push(`/courses?title=${search}`);
    }
  };
  return (
    <div className="my-20 dark:bg-hsl-custom max-w-screen-xl mx-auto px-6 md:px-12">
     
      <div className="relative dark:bg-hsl-custom lg:flex lg:items-center lg:gap-12">
        <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
        <div className="visible lg:invisible sm:visible md:visible">
            
          </div>
          <h1 className="visible mt-12 lg:mt-0 sm:mt-12 md:mt-12 lg:visible sm:visible md:visible font-bold text-[#a6a6a6] text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-gray-700">
            The best way to <span className="text-gray-900 dark:text-white">Upgrade Yourself</span>  starts here.
          </h1>
          <h5 className="mt-8 text-2xl text-gray-600 dark:text-gray-300">Upgrade your Labs by getting accreditation to boost your credibility .</h5>
          <br />
          <Link href="/nabl" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                NABL Consultancy
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <Link href="/courses" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Check out our Courses
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link> 

          <div className="invisible lg:visible sm:invisible md:invisible">
           
          </div>
        </div>
        <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
          {content ? (
            <Link href={`/course/${content?.banner?.title}`}>
             <img
              src={content?.banner?.image?.url}
              alt=""
            />
            </Link>
           
          ) : (
            <img
              src="/assests/laptop.png"
              alt="project illustration"
              height=""
              width=""
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainHero;
