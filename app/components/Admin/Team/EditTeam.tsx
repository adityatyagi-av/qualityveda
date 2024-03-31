"use client";
import React, { FC, useEffect, useState } from "react";
import { useEditTeamMutation, useGetAllTeamsQuery } from "../../../../redux/features/teams/teamApi";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";
import TeamInformation from "./TeamInformation";
import TeamPreview from "./TeamPreview";
import TeamOptions from "./TeamOptions";

type Props = {
    id: string;
};

const EditTeam:FC<Props> = ({id}) => {
    const [editTeam,{isSuccess,error}] = useEditTeamMutation();
    const { data, refetch } = useGetAllTeamsQuery(
        {},
        { refetchOnMountOrArgChange: true }
      );
    
      const editTeamData = data && data.teams.find((i:any) => i._id === id);
      
  useEffect(() => {
    if (isSuccess) {
      toast.success("Team Updated successfully");
      redirect("/admin/teams");
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
    if (editTeamData) {
      setTeamInfo({
        name: editTeamData.name,
        link: editTeamData.link,
       designation:editTeamData.designation,
        image: editTeamData?.image?.url,
      })
    }
  }, [editTeamData]);


  const [teamInfo, setTeamInfo] = useState({
    name: "",
    link:  "",
    image:  "",
    designation:"",
  });
  


  const [teamData, setTeamData] = useState({});


  const handleSubmit = async () => {
    

    //   prepare our data object
    const data = {
      name: teamInfo.name,
      link: teamInfo.link,
      designation:teamInfo.designation,
      image: teamInfo.image,
      
    };

    setTeamData(data);
  };


  const handleTeamCreate = async (e: any) => {
    const data = teamData;
    await editTeam({id:editTeamData?._id,data});
  };

  return (
    <div className="w-full flex min-h-screen">
      <div className="w-[80%]">
        {active === 0 && (
          <TeamInformation
          teamInfo={teamInfo}
          setTeamInfo={setTeamInfo}
          active={active}
          handleSubmit={handleSubmit}
          setActive={setActive}
          
         
        />
          
        )}

        {active === 1 && (
          <TeamPreview
          active={active}
          setActive={setActive}
          teamData={teamData}
          handleTeamCreate={handleTeamCreate}
        />
        )}
        
      </div>
      <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0">
        <TeamOptions active={active} setActive={setActive}  />
      </div>
    </div>
  );
};

export default EditTeam;
