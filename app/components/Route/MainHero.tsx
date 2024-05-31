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
  const handleSearch = () => {
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
          <h1 className=" font-bold text-[#a6a6a6] text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-gray-700">
            The best way to <span className="text-gray-900 dark:text-white">Upgrade Yourself</span>  starts here.
          </h1>
          {/* <p className="mt-8 text-gray-600 dark:text-gray-300">Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p> */}
          <div>
            <form className="w-full mt-12">
              <div className="relative flex items-center px-2 p-1 rounded-full bg-white dark:bg-gray-900 border dark:border-gray-700 border-primary/10 shadow-md md:p-2 lg:pr-3">
                <div className="pl-6 py-3">
                  <svg
                    className="h-6 w-6 m-auto fill-blue-900/60 dark:fill-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                  </svg>
                </div>
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder=" Search Course"
                  className="w-full p-4 bg-inherit border-current rounded-full placeholder-gray-600 dark:placeholder-white "
                />
                <div className="md:pr-1.5 lg:pr-0">
                  <button
                  onClick={handleSearch}
                    type="button"
                    className="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-[#005BC4] dark:before:bg-[#002E62] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span className="relative hidden w-max text-white dark:text-white font-semibold md:block">
                      Search
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative h-6 w-6 mx-auto text-white dark:text-gray-900 md:hidden"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
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
              alt="Quality Veda - Discover how Quality Veda saves costs and ensures success in accreditation. Our Quality Manager streamlines the assessment process, earning trust from assessors and optimizing resources for labs and hospitals."
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
