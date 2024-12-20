import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about' id='about'>
        <h1>About CertifyChain</h1>
        <p>Our system is designed to streamline the process of certificate generation and verification using blockchain technology. It serves as a secure platform for educational institutions to issue certificates to eligible students and for employers or other entities to verify the authenticity of these certificates.</p>
        <p>In simple terms, when a student completes their academic program, their institution can generate a digital certificate for them using our system. This certificate is securely stored on the blockchain, ensuring its integrity and preventing tampering. Students can then easily access and download their certificates from our platform.</p>
        <p>When an employer or any other party needs to verify a certificate, they can do so by simply accessing our platform and inputting the certificate details. Our system retrieves the certificate from the blockchain and verifies its authenticity, providing confidence in the validity of the document. This streamlined process saves time and eliminates the need for manual verification methods.</p>
    </div>
  )
}

export default About