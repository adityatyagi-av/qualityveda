import React from 'react'

import MainHero from './MainHero'
import Why from './Why'
import Quality from './Quality'
import Callback from './Callback'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <MainHero/>
    <Quality/>
    <Why/>
    <Callback/>
    </>
  )
}

export default page