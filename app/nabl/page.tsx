import React from 'react'

import MainHero from './MainHero'
import Why from './Why'
import Quality from './Quality'
import Callback from './Callback'
import NablCarousel from '../components/Carousel/LabCarousel'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <MainHero/>
    <Quality/>
    
    <Why/>
    <NablCarousel/>
    <Callback/>
    </>
  )
}

export default page