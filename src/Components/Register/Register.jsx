import React from 'react';
import './Register.css';
import register_img from '../../assets/im-storie-blockchain-usos-futuros-desktop.jpg';
import play_icon from '../../assets/play-icon.png';

const Register = () => {
  return (
    <div className='register' id='register'>
      <div className="about-left">
        <img src={register_img} alt="" className='register-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>REGISTER HERE</h3>
        <h2>Which user are you?</h2>
        <ul className="button-list">
          <li><button className='bto'>Student</button></li>
          <li><button className='bto'>Admin</button></li>
          <li><button className='bto'>Verifier</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Register;
