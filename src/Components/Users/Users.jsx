import React from 'react'
import './Users.css'
import step_1 from '../../assets/number-1.png'
import step_2 from '../../assets/number-2.png'
import step_3 from '../../assets/number-3.png'
import stage_1 from '../../assets/1.png'
import stage_2 from '../../assets/2.png'
import stage_3 from '../../assets/3.png'

const Steps = () => {
  return (
    <div className='steps' id='users'>
        <div className='step'>
            <img src={stage_1} alt="" />
            <div className="caption">
            <img src={step_1} alt="" />
               <p>Students can enter their credentials and 
                easily download their certificates.</p> 
            </div>
        </div>
        <div className='step'>
            <img src={stage_2} alt="" />
            <div className="caption">
            <img src={step_2} alt="" />
               <p>Admins from colleges or universities 
                can generate certificates for eligible 
                students.</p> 
            </div>
        </div>
        <div className='step'>
            <img src={stage_3} alt="" />
            <div className="caption">
            <img src={step_3} alt="" />
               <p>Verifiers from any industry 
                can verify the certificates provided 
                by the student.</p> 
            </div>
        </div>
    </div>
  )
}

export default Steps