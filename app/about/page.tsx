import Heading from "../utils/Heading";
import About from "./About";
import AboutHero from "./AboutHero";
import AboutTeam from "./AboutTeam";
type Props = {};

const Page = (props: Props) => {
  return (
    <div className="dark:bg-hsl-custom">
      <Heading
        title="About Quality Veda | Leading Medical Training Platform"
        description=": Quality Veda is your premier destination for diverse medical training programs, bridging theoretical knowledge with practical application. Discover our mission to elevate healthcare standards and our vision for excellence in patient care."
        keywords="ISO 15189 training.	4 days iso 15189 training,	Laboratory quality control,	Quality manager training,	quality manager certification online,	ISO 15189 certification,	Quality management systems,	Laboratory accreditation,	Internal quality control,	ISO 15189 version 2022 pdf,	Medical laboratory training,	ISO 15189 consultant,	iso 15189 version 2022 training,	iso 15189 version 2022 certificate,	Quality assurance in healthcare,	Pathology laboratory training,	Clinical laboratory standards, ISO 15189 checklist, Laboratory quality improvement, ISO 15189 courses, Phlebotomy training , Laboratory quality management , NABL Accreditation"
      />
     <AboutHero/>
      <About />
      <AboutTeam/>
    </div>
  );
};

export default Page;
