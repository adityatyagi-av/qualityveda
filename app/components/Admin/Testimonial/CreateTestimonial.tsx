"use client";
import React, { useEffect, useState } from "react";
import { useCreateTestimonialMutation } from "../../../../redux/features/testimonials/testimonialApi";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";
import TestimonialOptions from "./TestimonialOptions";
import TestimonialInformation from "./TestimonialInformation";
import TestimonialPreview from "./TestimonialPreview";

type Props = {};

const CreateTestimonial = (props: Props) => {
  const [createTestimonial, { isLoading, isSuccess, error }] =
  useCreateTestimonialMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Testimonial created successfully");
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
  const [testimonialInfo, setTestimonialInfo] = useState({
    name: "",
    description: "",
    image: "",
    designation:"",
  });
  
 

  const [testimonialData, setTestimonialData] = useState({});


  const handleSubmit = async () => {
    //   prepare our data object
    const data = {
      name: testimonialInfo.name,
      description: testimonialInfo.description,
      image:testimonialInfo.image,
      designation:testimonialInfo.designation,
    };
    setTestimonialData(data);
  };

  const handleTestimonialCreate = async (e: any) => {
    const data = testimonialData;
    if (!isLoading) {
      await createTestimonial(data);
    }
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
      <TestimonialOptions active={active} setActive={setActive} />
        
      </div>
    </div>
  );
};

export default CreateTestimonial;
