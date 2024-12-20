import React from 'react'
import './Background.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='background'>
      <div className='hero-text'>
        <h1>Unlock a new era in certificate security and validation</h1>
        <p>CertifyChain is a cutting-edge blockchain solution 
          streamlining certificate issuance and 
          verification processes for educational 
          institutions. It ensures tamper-proof 
          certificates accessible through a decentralized system, 
          enhancing security and trust in 
          credential validation.</p>
           <button className='btn'>Explore more 
           <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero