import { FC,useState,useEffect } from "react";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const Search:FC<Props> = (props: Props) => {
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
    <div className="flex flex-cols lg:w-[770px] lg:h-10 justify-end items-end">
    <div className="flex ml=36 lg:ml-80 lg:w-2/3 h-10 my-4 dark:bg-hsl-custom max-w-screen-xl mx-auto px-4 md:px-8">
  <div className="justify-end w-full h-full relative dark:bg-hsl-custom lg:flex lg:items-center lg:gap-8">
    <div className="justify-end text-center lg:w-full h-full lg:text-left md:mt-8 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
      <div className="justify-start w-6/6 h-full">
        <form className="w-full lg:mt-0 lg:mb-2 h-10">
          <div className="relative flex items-center px-2 p-1 rounded-full bg-white dark:bg-gray-900 border dark:border-gray-700 border-primary/10 shadow-md md:p-2 lg:pr-3">
            <div className="pl-4 py-2">
              <svg
                className="h-4 w-4 fill-blue-900/60 dark:fill-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Course"
              className="w-full py-2 bg-inherit border-current rounded-full text-sm placeholder-gray-600 dark:placeholder-white"
            />
            <div className="md:pr-1.5 lg:pr-0">
              <button
                onClick={handleSearch}
                type="button"
                className="relative h-8 w-16 sm:w-auto ml-auto sm:px-4 before:absolute before:inset-0 before:rounded-full before:bg-[#005BC4] dark:before:bg-[#002E62] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              >
                <span className="relative hidden w-max text-white dark:text-white font-semibold md:block">
                  Search
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative h-4 w-4 mx-auto text-white dark:text-gray-900 md:hidden"
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
  </div>
</div>
</div>

  );
};

export default Search;
