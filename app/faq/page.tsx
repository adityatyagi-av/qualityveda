"use client"
import React from 'react'
import FAQ from '../components/FAQ/FAQ'
import Heading from '../utils/Heading'


type Props = {}

const page = (props: Props) => {
  return (
    <div className='max-w-screen-lg mx-auto'>
      <Heading
        title="FAQ QualityVeda | Elevate Your Laboratory Quality with ISO 15189 Training | About Quality Veda | Leading Medical Training Platform"
        description=" Quality Veda is your premier destination for diverse medical training programs, bridging theoretical knowledge with practical application. Discover our mission to elevate healthcare standards and our vision for excellence in patient care."
        keywords="ISO 15189 training.	4 days iso 15189 training,	Laboratory quality control,	Quality manager training,	quality manager certification online,	ISO 15189 certification,	Quality management systems,	Laboratory accreditation,	Internal quality control,	ISO 15189 version 2022 pdf,	Medical laboratory training,	ISO 15189 consultant,	iso 15189 version 2022 training,	iso 15189 version 2022 certificate,	Quality assurance in healthcare,	Pathology laboratory training,	Clinical laboratory standards, ISO 15189 checklist, Laboratory quality improvement, ISO 15189 courses, Phlebotomy training , Laboratory quality management , NABL Accreditation"
      />
        <FAQ/>
    </div>
  )
}

export default page