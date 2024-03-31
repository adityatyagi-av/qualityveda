"use client";
import React, { useEffect, useState } from "react";
import { useCreateLabMutation } from "../../../../redux/features/labs/labApi";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";
import LabOptions from "./LabOptions";
import LabInformation from "./LabInformation";
import LabPreview from "./LabPreview";

type Props = {};

const CreateLab = (props: Props) => {
  const [createLab, { isLoading, isSuccess, error }] =
  useCreateLabMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Lab created successfully");
      redirect("/admin/labs");
    }
    if (error) {
      if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [isSuccess, error]);

  const [active, setActive] = useState(0);
  const [labInfo, setLabInfo] = useState({
    name: "",
    description: "",
    image: "",
    designation:"",
  });
  
 

  const [labData, setLabData] = useState({});


  const handleSubmit = async () => {
    //   prepare our data object
    const data = {
      name: labInfo.name,
      description: labInfo.description,
      image:labInfo.image,
      designation:labInfo.designation,
    };
    setLabData(data);
  };

  const handleLabCreate = async (e: any) => {
    const data = labData;
    if (!isLoading) {
      await createLab(data);
    }
  };

  return (
    <div className="w-full flex min-h-screen">
      <div className="w-[80%]">
        {active === 0 && (
            
            <LabInformation
            labInfo={labInfo}
            setLabInfo={setLabInfo}
            active={active}
            handleSubmit={handleSubmit}
            setActive={setActive}
            
           
          />
        )}
        {active === 1 && (
            <LabPreview
            active={active}
            setActive={setActive}
            labData={labData}
            handleLabCreate={handleLabCreate}
          />
        )}
      </div>
      <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0">
      <LabOptions active={active} setActive={setActive} />
        
      </div>
    </div>
  );
};

export default CreateLab;
