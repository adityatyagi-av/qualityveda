import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Gene Bates",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student | Cambridge university",
    comment:
    "I had the pleasure of exploring Becodemy, a website that provides an extensive range of courses on various tech-related topics. I was thoroughly impressed with my experience, as the website offers a comprehensive selection of courses that cater to different skill levels and interests. If you're looking to enhance your knowledge and skills in the tech industry, I highly recommend checking out Becodemy!",
},
  {
    name: "Verna Santos",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Full stack developer | Quarter ltd.",
    comment:
    "Thanks for your amazing programming tutorial channel! Your teaching style is outstanding, and the quality of your tutorials is top-notch. Your ability to break down complex topics into manageable parts, and cover diverse programming languages and topics is truly impressive. The practical applications and real-world examples you incorporate reinforce the theoretical knowledge and provide valuable insights. Your engagement with the audience fosters a supportive learning environment. Thank you for your dedication, expertise, and passion for teaching programming, and keep up the fantastic work!",
},
  {
    name: "Jay Gibbs",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "computer systems engineering student | Zimbabwe",
    comment:
    "Thanks for your amazing programming tutorial channel! Your teaching style is outstanding, and the quality of your tutorials is top-notch. Your ability to break down complex topics into manageable parts, and cover diverse programming languages and topics is truly impressive. The practical applications and real-world examples you incorporate reinforce the theoretical knowledge and provide valuable insights. Your engagement with the audience fosters a supportive learning environment. Thank you for your dedication, expertise, and passion for teaching programming, and keep up the fantastic work!"},
  {
    name: "Mina Davidson",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Junior Web Developer | Indonesia",
    comment:
    "I had the pleasure of exploring Becodemy, a website that provides an extensive range of courses on various tech-related topics. I was thoroughly impressed with my experience",
},
  {
    name: "Rosemary Smith",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Full stack web developer | Algeria",
    comment:
    "Your content is very special. The thing I liked the most is that the videos are so long, which means they cover everything in details. for that any person had beginner-level can complete an integrated project when he watches the videos. Thank you very much. Im very excited for the next videos Keep doing this amazing work",
},
  {
    name: "Laura Mckenzie",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Full stack web developer | Canada",
    comment:
    "Join Becodemy! Becodemy focuses on practical applications rather than just teaching the theory behind programming languages or frameworks. I took a lesson on creating a web marketplace using React JS, and it was very helpful in teaching me the different stages involved in creating a project from start to finish. Overall, I highly recommend Becodemy to anyone looking to improve their programming skills and build practical projects. Becodemy is a great resource that will help you take your skills to the next level.",
},
];

const Reviews = (props: Props) => {
  return (
   <>
        <div>
            <div className="lg:px-20 md:px-6 px-4 py-12">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="lg:text-4xl text-3xl font-bold text-center dark:text-gray-50 text-gray-800">Hear from our Enrolled Students</h1>
                    <p className="text-base leading-6 mt-4 text-center dark:text-gray-200  text-gray-600 2xl:w-2/5 ">Here is why you should trust us with your work achievements</p>
                </div>
                <div className="w-full lg:flex items-center gap-6 mt-10">
                    <div className="lg:w-1/2">
                        <div className="bg-white dark:border-gray-800 dark:bg-gray-900 border rounded-md border-gray-200 relative sm:p-10 p-6">
                            <div>
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg" alt="commas" />
                            </div>
                            <p className="text-base leading-6 text-gray-600 dark:text-gray-100 mt-4">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                            <div className="absolute bottom-0 -mb-4 ml-10">
                                
                                
                            </div>
                        </div>
                        <div className="flex items-center mt-7">
                            <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                                <img src="https://i.ibb.co/R6WQhYj/Mask-Group.png" className="w-10 h-10 rounded-full" alt="profile" />
                            </div>
                            <div className="flex flex-col items-start ml-4">
                                <p className="text-base font-semibold dark:text-gray-200 leading-4 text-gray-800">Alisha Cooper</p>
                                <p className="text-base leading-4 mt-2 text-center text-gray-600 dark:text-gray-400">Senior Lab Assistant</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:mt-0 mt-16">
                        <div className="bg-white border rounded-md dark:border-gray-800 dark:bg-gray-900 border-gray-200 relative sm:p-10 p-6">
                            <div>
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg" alt="commas" />
                            </div>
                            <p className="text-base leading-6 text-gray-600 dark:text-gray-100 mt-4">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                            <div className="absolute bottom-0 -mb-4 ml-10">
                                
                            </div>
                        </div>
                        <div className="flex items-center mt-7">
                            <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                                <img src="https://i.ibb.co/C6bwf12/Mask-Group.png" className="w-10 h-10 rounded-full" alt="profile" />
                            </div>
                            <div className="flex flex-col items-start ml-4">
                                <p className="text-base font-semibold leading-4 text-gray-800 dark:text-gray-200">Henry Jack</p>
                                <p className="text-base leading-4 mt-2 text-center text-gray-600 dark:text-gray-400">Technician Mittal Labs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  </>
  );
};

export default Reviews;
