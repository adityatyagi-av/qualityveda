"use client";
import Heading from "../utils/Heading";

import Policy from "./Policy";

type Props = {};

const Page = (props: Props) => {


  return (
    <div>
      <Heading
        title="Shipping Policy - Elearning"
        description="Elearning is a learning management system for helping programmers."
        keywords="programming,mern"
      />
     
      <Policy />
     
    </div>
  );
};

export default Page;
