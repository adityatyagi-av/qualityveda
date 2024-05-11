import { styles } from "@/app/styles/style";
import CoursePlayer from "@/app/utils/CoursePlayer";
import Ratings from "@/app/utils/Ratings";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneOutline, IoCloseOutline } from "react-icons/io5";
import { format } from "timeago.js";
import CourseContentList from "../Course/CourseContentList";
import { toast } from "react-hot-toast";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Image from "next/image";
import { VscVerifiedFilled } from "react-icons/vsc";
import axios from "axios";
import { useCreateLiveOrderMutation, useCreatePaymentIntentMutation } from "@/redux/features/orders/ordersApi";
import { redirect } from "next/navigation";
import socketIO from "socket.io-client";
const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

type Props = {
  data: any;
 
  setRoute: any;
  setOpen: any;
};

const CourseDetails = ({
  data,
  setRoute,
  setOpen: openAuthModal,
}: Props) => {

  const { data: userData,refetch } = useLoadUserQuery(undefined, {});
  const [user, setUser] = useState<any>();
  const [open, setOpen] = useState(false);
  const [orderDetails,setOrderDetails]=useState<any>({});
  const [orderFinalDetails,setOrderFinalDetails]=useState("");
  const [createPaymentIntent, { data: paymentIntentData }] =
    useCreatePaymentIntentMutation();
    
    const [createOrder, { data: orderData,error }] =
    useCreateLiveOrderMutation();

    function loadScript(src:any) {
      return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
          resolve(true)
        }
        script.onerror = () => {
          resolve(false)
        }
        document.body.appendChild(script)
      })
    }
    
  useEffect(() => {
    setUser(userData?.user);
  }, [userData]);
  useEffect(() => {
    if (paymentIntentData) {
      setOrderDetails(paymentIntentData);
    }
   
  }, [paymentIntentData]);
  useEffect(() => {
    if(orderData){
     refetch();
     socketId.emit("notification", {
        title: "New Order",
        message: `You have a new order from ${data.name}`,
        userId: user._id,
     });
     redirect(`/live-course-access/${data._id}`);
    }
    if(error){
     if ("data" in error) {
         const errorMessage = error as any;
         toast.error(errorMessage.data.message);
       }
    }
   }, [orderData,error])
  
  
  const isPurchased =
    user && user?.livecourses?.find((item: any) => item._id === data._id);

  const handleOrder =async (amount: any) => {
    console.log("Data:", data);
    if (user) {
     
      const { data: { key } } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/getkey`)
      if(!key){
        toast.error("Razropay failed to load!!"); 
        return; 
      }
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
      
      if (!res){
        alert('Razropay failed to load!!')
        return 
      }
      createPaymentIntent(amount);
      
      const options = {
        key:key,
        amount: orderDetails?.order.amount ,
        currency: "INR",
        name: data.name,
        description:"description of data ",
        image: data.thumbnail?.url || "https://www.qualityveda.co/assests/qualityvedalogo.png",

        order_id: orderDetails?.order?.id,
        handler: function (response:any){
          
          createOrder({ courseId: data._id, payment_info: response })
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature)
      },
  
        prefill: {
          name: user.name,
          email: user.email,
          
      },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#0000FF"
        }
    };
    const paymentObject = new (window as any).Razorpay(options);
  paymentObject.open();
  


    } else {
      
      toast.error("Please login to buy this course");
      




    }
  };

  


  return (
    <div>
      <div className="w-[90%] 800px:w-[90%] m-auto py-5">
        <div className="w-full flex flex-col-reverse 800px:flex-row">
          <div className="w-full 800px:w-[65%] 800px:pr-5">
            <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
              {data.name}
            </h1>
            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center">
                <Ratings rating={data.ratings} />
                <h5 className="text-black dark:text-white">
                  {data.reviews?.length} Reviews
                </h5>
              </div>
              <h5 className="text-black dark:text-white">
                {data.purchased} Students
              </h5>
            </div>

            <br />
            <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
              What you will learn from this course?
            </h1>
            <div>
              {data.benefits?.map((item: any, index: number) => (
                <div
                  className="w-full flex 800px:items-center py-2"
                  key={index}
                >
                  <div className="w-[15px] mr-1">
                    <IoCheckmarkDoneOutline
                      size={20}
                      className="text-black dark:text-white"
                    />
                  </div>
                  <p className="pl-2 text-black dark:text-white">
                    {item.title}
                  </p>
                </div>
              ))}
              <br />
              <br />
            </div>
            <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
              What are the prerequisites for starting this course?
            </h1>
            {data.prerequisites?.map((item: any, index: number) => (
              <div className="w-full flex 800px:items-center py-2" key={index}>
                <div className="w-[15px] mr-1">
                  <IoCheckmarkDoneOutline
                    size={20}
                    className="text-black dark:text-white"
                  />
                </div>
                <p className="pl-2 text-black dark:text-white">{item.title}</p>
              </div>
            ))}
            <br />
            <br />
            <div>
              <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
                Course Overview
              </h1>
              <CourseContentList data={data?.courseData} isDemo={true} />
            </div>
            <br />
            <br />
            {/* course description */}
            <div className="w-full">
              <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
                Course Details
              </h1>
              <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden text-black dark:text-white">
                {data.description}
              </p>
            </div>
            <br />
            <br />
            <div className="w-full">
              <div className="800px:flex items-center">
                <Ratings rating={data?.ratings} />
                <div className="mb-2 800px:mb-[unset]" />
                <h5 className="text-[25px] font-Poppins text-black dark:text-white">
                  {Number.isInteger(data?.ratings)
                    ? data?.ratings.toFixed(1)
                    : data?.ratings.toFixed(2)}{" "}
                  Course Rating • {data?.reviews?.length} Reviews
                </h5>
              </div>
              <br />
              {(data?.reviews && [...data.reviews].reverse()).map(
                (item: any, index: number) => (
                  <div className="w-full pb-4" key={index}>
                    <div className="flex">
                      <div className="w-[50px] h-[50px]">
                        <Image
                          src={
                            item.user.avatar
                              ? item.user.avatar.url
                              : "https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png"
                          }
                          width={50}
                          height={50}
                          alt=""
                          className="w-[50px] h-[50px] rounded-full object-cover"
                        />
                      </div>
                      <div className="hidden 800px:block pl-2">
                        <div className="flex items-center">
                          <h5 className="text-[18px] pr-2 text-black dark:text-white">
                            {item.user.name}
                          </h5>
                          <Ratings rating={item.rating} />
                        </div>
                        <p className="text-black dark:text-white">
                          {item.comment}
                        </p>
                        <small className="text-[#000000d1] dark:text-[#ffffff83]">
                          {format(item.createdAt)} •
                        </small>
                      </div>
                      <div className="pl-2 flex 800px:hidden items-center">
                        <h5 className="text-[18px] pr-2 text-black dark:text-white">
                          {item.user.name}
                        </h5>
                        <Ratings rating={item.rating} />
                      </div>
                    </div>
                    {item.commentReplies.map((i: any, index: number) => (
                      <div className="w-full flex 800px:ml-16 my-5" key={index}>
                        <div className="w-[50px] h-[50px]">
                          <Image
                            src={
                              i.user.avatar
                                ? i.user.avatar.url
                                : "https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png"
                            }
                            width={50}
                            height={50}
                            alt=""
                            className="w-[50px] h-[50px] rounded-full object-cover"
                          />
                        </div>
                        <div className="pl-2">
                          <div className="flex items-center">
                            <h5 className="text-[20px]">{i.user.name}</h5>{" "}
                            <VscVerifiedFilled className="text-[#0095F6] ml-2 text-[20px]" />
                          </div>
                          <p>{i.comment}</p>
                          <small className="text-[#ffffff83]">
                            {format(i.createdAt)} •
                          </small>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="w-full 800px:w-[35%] relative">
            <div className="sticky top-[100px] left-0 z-50 w-full">
              <CoursePlayer videoUrl={data?.demoUrl} title={data?.title} />
              <div className="flex items-center">
                <h1 className="pt-5 text-[25px] text-black dark:text-white">
                  {data.price === 0 ? "Free" :"₹"+ data.price }
                </h1>
                {data.estimatedPrice && 
                <h5 className="pl-3 text-[20px] mt-2 line-through opacity-80 text-black dark:text-white">
                ₹ {data.estimatedPrice}
                </h5>}
                
                { (data.estimatedPrice) &&
                 <h4 className="pl-5 pt-4 text-[22px] text-black dark:text-white">
                 {(((data?.estimatedPrice - data.price) / data?.estimatedPrice) * 100).toFixed(0)}% Off
               </h4>                
}
               
              </div>
              <div className="flex items-center">
                {isPurchased ? (
                  <Link
                    className={`${styles.button} !w-[180px] my-3 font-Poppins cursor-pointer !bg-[crimson]`}
                    href={`/course-access/${data._id}`}
                  >
                    Enter to Course
                  </Link>
                ) : (
                  <div
                    className={`${styles.button} !w-[180px] my-3 font-Poppins cursor-pointer !bg-[crimson]`}
                    onClick={()=>handleOrder(data.price)}
                  >
                    Buy Now ₹{data.price} 
                  </div>
                )}
              </div>
              <br />
              
              <p className="pb-1 text-black dark:text-white">
                • Full lifetime access
              </p>
              <p className="pb-1 text-black dark:text-white">
                • Certificate of completion
              </p>
              <p className="pb-3 800px:pb-1 text-black dark:text-white">
                • Premium Support
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CourseDetails;
