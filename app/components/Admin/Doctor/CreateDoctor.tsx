"use client";
import React, { useEffect, useState } from "react";
import { useCreateDoctorMutation } from "../../../../redux/features/doctors/doctorApi";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";
import DoctorOptions from "./DoctorOptions";
import DoctorInformation from "./DoctorInformation";
import DoctorPreview from "./DoctorPreview";

type Props = {};

const CreateDoctor = (props: Props) => {
  const [createDoctor, { isLoading, isSuccess, error }] =
  useCreateDoctorMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Doctor created successfully");
      redirect("/admin/doctors");
    }
    if (error) {
      if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [isSuccess, error]);

  const [active, setActive] = useState(0);
  const [doctorInfo, setDoctorInfo] = useState({
    name: "",
    description: "",
    image: "",
    designation:"",
  });
  
 

  const [doctorData, setDoctorData] = useState({});


  const handleSubmit = async () => {
    //   prepare our data object
    const data = {
      name: doctorInfo.name,
      description: doctorInfo.description,
      image:doctorInfo.image,
      designation:doctorInfo.designation,
    };
    setDoctorData(data);
  };

  const handleDoctorCreate = async (e: any) => {
    const data = doctorData;
    if (!isLoading) {
      await createDoctor(data);
    }
  };

  return (
    <div className="w-full flex min-h-screen">
      <div className="w-[80%]">
        {active === 0 && (
            
            <DoctorInformation
            doctorInfo={doctorInfo}
            setDoctorInfo={setDoctorInfo}
            active={active}
            handleSubmit={handleSubmit}
            setActive={setActive}
            
           
          />
        )}
        {active === 1 && (
            <DoctorPreview
            active={active}
            setActive={setActive}
            doctorData={doctorData}
            handleDoctorCreate={handleDoctorCreate}
          />
        )}
      </div>
      <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0">
      <DoctorOptions active={active} setActive={setActive} />
        
      </div>
    </div>
  );
};

export default CreateDoctor;
