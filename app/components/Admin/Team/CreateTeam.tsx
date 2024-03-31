"use client";
import React, { useEffect, useState } from "react";
import { useCreateTeamMutation } from "../../../../redux/features/teams/teamApi";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";
import TeamOptions from "./TeamOptions";
import TeamInformation from "./TeamInformation";
import TeamPreview from "./TeamPreview";

type Props = {};

const CreateTeam = (props: Props) => {
  const [createTeam, { isLoading, isSuccess, error }] =
  useCreateTeamMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Team created successfully");
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
  const [teamInfo, setTeamInfo] = useState({
    name: "",
    description: "",
    image: "",
    designation:"",
  });
  
 

  const [teamData, setTeamData] = useState({});


  const handleSubmit = async () => {
    //   prepare our data object
    const data = {
      name: teamInfo.name,
      description: teamInfo.description,
      image:teamInfo.image,
      designation:teamInfo.designation,
    };
    setTeamData(data);
  };

  const handleTeamCreate = async (e: any) => {
    const data = teamData;
    if (!isLoading) {
      await createTeam(data);
    }
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
      <TeamOptions active={active} setActive={setActive} />
        
      </div>
    </div>
  );
};

export default CreateTeam;
