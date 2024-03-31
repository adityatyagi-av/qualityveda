import React, { FC } from "react";

type Props = {
  active: number;
  setActive: (active: number) => void;
  teamData: any;
  handleTeamCreate: any;
  isEdit?: boolean;
};

const TeamPreview: FC<Props> = ({
  teamData,
  handleTeamCreate,
  setActive,
  active,
  isEdit
}) => {
  const prevButton = () => {
    setActive(active - 1);
  };

  const createTeam = () => {
    handleTeamCreate();
  };

  return (
    <div className="w-[90%] m-auto py-5 mb-5">
      <div className="w-full relative">
        

       
      </div>
      <div className="w-full">
        <div className="w-full">
          <h1 className="text-[25px] font-Poppins font-[600]">
            Person Name
          </h1>
          <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden">
            {teamData?.name}
          </p>
          <div className="w-full">
          <h1 className="text-[25px] font-Poppins font-[600]">
            Person{`'`}s Designation
          </h1>
          <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden">
            {teamData?.designation}
          </p>
        </div>
        </div><div className="w-full">
          <h1 className="text-[25px] font-Poppins font-[600]">
            Team link
          </h1>
          <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden">
            {teamData?.link}
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="w-full flex items-center justify-between">
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => prevButton()}
        >
          Prev
        </div>
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => createTeam()}
        >
         {
          isEdit ? 'Update' : 'Create'
         }
        </div>
      </div>
    </div>
  );
};

export default TeamPreview;
