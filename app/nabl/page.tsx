import React from 'react'

import MainHero from './MainHero'
import Why from './Why'
import Quality from './Quality'
import Callback from './Callback'
import NablCarousel from '../components/Carousel/LabCarousel'
import Heading from '../utils/Heading'

type Props = {}

const page = (props: Props) => {
  return (
    <>
     <Heading
        title="NABL QualityVeda | NABL Accreditation Services | Quality Veda"
        description="Discover affordable and efficient accreditation services with Quality Veda. Join labs and hospitals worldwide in achieving excellence without breaking the bank."
        keywords="best nabl consultant in india,
        best nabl consultant in delhi ncr,
        best CAP consultant in India,
        best nabh consultant in india,
        NABL accreditation services,
        Affordable lab accreditation,
        Laboratory accreditation process,
        NABL certification cost,
        Accreditation services for hospitals,
        nabl accreditation process,
        nabl consultants,
        nabl consultancy charges,
        NABL consultancy services,
        nabl consultants in Chennai,
        nabl consultants in Delhi,
        nabl consultants in Hyderabad,
        nabl consultants in Bangalore,
        nabl consultants in Kolkata,
        NABL accreditation benefits,
        ISO 15189 accreditation,
        Accreditation for medical laboratories,
        Best NABH Consultant
        
        "
      />
    <MainHero/>
    <Quality/>
    
    <Why/>
    <NablCarousel/>
    <Callback/>
    </>
  )
}

export default page