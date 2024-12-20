import Background from './Components/Background/Background';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';
import Title from './Components/Title/Title';
import Users from './Components/Users/Users';
import React from 'react'; 
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
    
      <Navbar />
      <Background />
      <Title subTitle="OUR USERS" title="We have three users" />
      <div className="container">
        <Users />
      </div>
      <div className="container">
        <Register />
      </div>
      <Footer />
    </div>
  );
};

export default App;
