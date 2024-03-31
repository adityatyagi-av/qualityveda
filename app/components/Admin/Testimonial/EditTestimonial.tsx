"use client";
import React, { FC, useEffect, useState } from "react";
import { useEditTestimonialMutation, useGetAllTestimonialsQuery } from "../../../../redux/features/testimonials/testimonialApi";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";
import TestimonialInformation from "./TestimonialInformation";
import TestimonialPreview from "./TestimonialPreview";
import TestimonialOptions from "./TestimonialOptions";

type Props = {
    id: string;
};

const EditTestimonial:FC<Props> = ({id}) => {
    const [editTestimonial,{isSuccess,error}] = useEditTestimonialMutation();
    const { data, refetch } = useGetAllTestimonialsQuery(
        {},
        { refetchOnMountOrArgChange: true }
      );
    
      const editTestimonialData = data && data.testimonials.find((i:any) => i._id === id);
      
  useEffect(() => {
    if (isSuccess) {
      toast.success("Testimonial Updated successfully");
      redirect("/admin/testimonials");
    }
    if (error) {
      if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [isSuccess, error]);


  const [active, setActive] = useState(0);

  useEffect(() => {
    if (editTestimonialData) {
      setTestimonialInfo({
        name: editTestimonialData.name,
        description: editTestimonialData.description,
       designation:editTestimonialData.designation,
        image: editTestimonialData?.image?.url,
      })
    }
  }, [editTestimonialData]);


  const [testimonialInfo, setTestimonialInfo] = useState({
    name: "",
    description:  "",
    image:  "",
    designation:"",
  });
  


  const [testimonialData, setTestimonialData] = useState({});


  const handleSubmit = async () => {
    

    //   prepare our data object
    const data = {
      name: testimonialInfo.name,
      description: testimonialInfo.description,
      designation:testimonialInfo.designation,
      image: testimonialInfo.image,
      
    };

    setTestimonialData(data);
  };


  const handleTestimonialCreate = async (e: any) => {
    const data = testimonialData;
    await editTestimonial({id:editTestimonialData?._id,data});
  };

  return (
    <div className="w-full flex min-h-screen">
      <div className="w-[80%]">
        {active === 0 && (
          <TestimonialInformation
          testimonialInfo={testimonialInfo}
          setTestimonialInfo={setTestimonialInfo}
          active={active}
          handleSubmit={handleSubmit}
          setActive={setActive}
          
         
        />
          
        )}

        {active === 1 && (
          <TestimonialPreview
          active={active}
          setActive={setActive}
          testimonialData={testimonialData}
          handleTestimonialCreate={handleTestimonialCreate}
        />
        )}
        
      </div>
      <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0">
        <TestimonialOptions active={active} setActive={setActive}  />
      </div>
    </div>
  );
};

export default EditTestimonial;
