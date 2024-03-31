"use client";
import React, { FC, useEffect, useState } from "react";
import { useEditDoctorMutation, useGetAllDoctorsQuery } from "../../../../redux/features/doctors/doctorApi";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";
import DoctorInformation from "./DoctorInformation";
import DoctorPreview from "./DoctorPreview";
import DoctorOptions from "./DoctorOptions";

type Props = {
    id: string;
};

const EditDoctor:FC<Props> = ({id}) => {
    const [editDoctor,{isSuccess,error}] = useEditDoctorMutation();
    const { data, refetch } = useGetAllDoctorsQuery(
        {},
        { refetchOnMountOrArgChange: true }
      );
    
      const editDoctorData = data && data.doctors.find((i:any) => i._id === id);
      
  useEffect(() => {
    if (isSuccess) {
      toast.success("Doctor Updated successfully");
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

  useEffect(() => {
    if (editDoctorData) {
      setDoctorInfo({
        name: editDoctorData.name,
        description: editDoctorData.description,
       designation:editDoctorData.designation,
        image: editDoctorData?.image?.url,
      })
    }
  }, [editDoctorData]);


  const [doctorInfo, setDoctorInfo] = useState({
    name: "",
    description:  "",
    image:  "",
    designation:"",
  });
  


  const [doctorData, setDoctorData] = useState({});


  const handleSubmit = async () => {
    

    //   prepare our data object
    const data = {
      name: doctorInfo.name,
      description: doctorInfo.description,
      designation:doctorInfo.designation,
      image: doctorInfo.image,
      
    };

    setDoctorData(data);
  };


  const handleDoctorCreate = async (e: any) => {
    const data = doctorData;
    await editDoctor({id:editDoctorData?._id,data});
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
        <DoctorOptions active={active} setActive={setActive}  />
      </div>
    </div>
  );
};

export default EditDoctor;
