import React from 'react'
import Cases from '../CasesCard'
import HeaderWithText from '../HeaderWithTextB'
import CardsB from '../CardsB'
import CtaBanner from '../CtaBanner'
import StepByStepB from '../StepByStepB'

function Boekhouders() {
  return (
    <div>
      <HeaderWithText/>
      <StepByStepB/>
      <CardsB/>
      <Cases/>
      <CtaBanner/>
    </div>
  )
}

export default Boekhouders
