import Heading from "../utils/Heading";
import About from "./About";
import AboutHero from "./AboutHero";
import AboutTeam from "./AboutTeam";
type Props = {};

const Page = (props: Props) => {
  return (
    <div className="dark:bg-hsl-custom">
      <Heading
        title="About us - Elearning"
        description="Elearning is a learning management system for helping programmers."
        keywords="programming,mern"
      />
     <AboutHero/>
      <About />
      <AboutTeam/>
    </div>
  );
};

export default Page;
