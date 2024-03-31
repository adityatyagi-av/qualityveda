"use client";
import React, { FC, useEffect, useState } from "react";
import { useEditLabMutation, useGetAllLabsQuery } from "../../../../redux/features/labs/labApi";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";
import LabInformation from "./LabInformation";
import LabPreview from "./LabPreview";
import LabOptions from "./LabOptions";

type Props = {
    id: string;
};

const EditLab:FC<Props> = ({id}) => {
    const [editLab,{isSuccess,error}] = useEditLabMutation();
    const { data, refetch } = useGetAllLabsQuery(
        {},
        { refetchOnMountOrArgChange: true }
      );
    
      const editLabData = data && data.labs.find((i:any) => i._id === id);
      
  useEffect(() => {
    if (isSuccess) {
      toast.success("Lab Updated successfully");
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

  useEffect(() => {
    if (editLabData) {
      setLabInfo({
        name: editLabData.name,
        description: editLabData.description,
       designation:editLabData.designation,
        image: editLabData?.image?.url,
      })
    }
  }, [editLabData]);


  const [labInfo, setLabInfo] = useState({
    name: "",
    description:  "",
    image:  "",
    designation:"",
  });
  


  const [labData, setLabData] = useState({});


  const handleSubmit = async () => {
    

    //   prepare our data object
    const data = {
      name: labInfo.name,
      description: labInfo.description,
      designation:labInfo.designation,
      image: labInfo.image,
      
    };

    setLabData(data);
  };


  const handleLabCreate = async (e: any) => {
    const data = labData;
    await editLab({id:editLabData?._id,data});
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
        <LabOptions active={active} setActive={setActive}  />
      </div>
    </div>
  );
};

export default EditLab;
