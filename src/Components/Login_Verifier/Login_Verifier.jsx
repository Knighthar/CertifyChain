import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for rendering
import './Login_Verifier.css'; // Import the CSS file for styling

function Login_Verifier() {
  const [signIn, toggle] = React.useState(true); // State to toggle between sign in and sign up

  // Render the components
  return (
    <div className="container">
      {/* Sign Up form */}
      <div className={`sign-up-container ${signIn ? 'right-panel-active' : ''}`}>
        <form className="form">
          <h2>Create Account</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="btn">Sign Up</button>
        </form>
      </div>

      {/* Sign In form */}
      <div className={`sign-in-container ${signIn ? '' : 'right-panel-active'}`}>
        <form className="form">
          <h2>Sign in</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button className="btn">Sign In</button>
        </form>
      </div>

      {/* Overlay container for switching between sign in and sign up */}
      <div className="overlay-container">
        <div className={`overlay ${signIn ? '' : 'right-panel-active'}`}>
          {/* Left panel for sign in */}
          <div className="overlay-panel overlay-left">
            <h2>Welcome Back!</h2>
            <p>To keep connected with us please login with your personal info</p>
            {/* Toggle button to switch to sign up */}
            <button className="ghost btn" onClick={() => toggle(true)}>Sign In</button>
          </div>

          {/* Right panel for sign up */}
          <div className="overlay-panel overlay-right">
            <h2>Hello, Friend!</h2>
            <p>Enter your personal details and start journey with us</p>
            {/* Toggle button to switch to sign in */}
            <button className="ghost btn" onClick={() => toggle(false)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Render the Login_Verifier component to the root element in the HTML
const rootElement = document.getElementById("root");
ReactDOM.render(<Login_Verifier />, rootElement);

export default Login_Verifier;
