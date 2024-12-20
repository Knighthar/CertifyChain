import React from 'react';
import ReactDOM from 'react-dom';
import './Login_Admin.css';

function Login_Admin() {
  const [signIn, toggle] = React.useState(true);

  return (
    <div className="container">
      <div className={`sign-up-container ${signIn ? 'right-panel-active' : ''}`}>
        <form className="form">
          <h2>Create Account</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="btn">Sign Up</button>
        </form>
      </div>
      <div className={`sign-in-container ${signIn ? '' : 'right-panel-active'}`}>
        <form className="form">
          <h2>Sign in</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button className="btn">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className={`overlay ${signIn ? '' : 'right-panel-active'}`}>
          <div className="overlay-panel overlay-left">
            <h2>Welcome Back!</h2>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost btn" onClick={() => toggle(true)}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h2>Hello, Friend!</h2>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost btn" onClick={() => toggle(false)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Login_Admin />, rootElement);

export default Login_Admin;
