'use client'
import Heading from "@/app/utils/Heading";
import CourseDetailsPage from "../../components/LiveCourse/CourseDetailsPage";


const Page = ({params}:any) => {
    return (
        <div>
            <Heading
        title="QualityVeda | Elevate Your Laboratory Quality with ISO 15189 Training | About Quality Veda | Leading Medical Training Platform"
        description=" Quality Veda is your premier destination for diverse medical training programs, bridging theoretical knowledge with practical application. Discover our mission to elevate healthcare standards and our vision for excellence in patient care."
        keywords="ISO 15189 training.	4 days iso 15189 training,	Laboratory quality control,	Quality manager training,	quality manager certification online,	ISO 15189 certification,	Quality management systems,	Laboratory accreditation,	Internal quality control,	ISO 15189 version 2022 pdf,	Medical laboratory training,	ISO 15189 consultant,	iso 15189 version 2022 training,	iso 15189 version 2022 certificate,	Quality assurance in healthcare,	Pathology laboratory training,	Clinical laboratory standards, ISO 15189 checklist, Laboratory quality improvement, ISO 15189 courses, Phlebotomy training , Laboratory quality management , NABL Accreditation"
      />
            <CourseDetailsPage id={params.id} />
        </div>
    )
}

export default Page;
 