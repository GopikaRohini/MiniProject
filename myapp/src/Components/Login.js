import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';
import axios from "axios";
const Login = () => {
  const [pid, setpid] = useState("");
  const [pwd, setpwd] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");

    axios
      .post("http://localhost:8081/prisonerlogin", { pid, pwd })
      .then((res) => {
        if (res.data.success) {
          console.log("User login successful");
          alert("Login successful");
          localStorage.setItem("pid", pid);
          navigate("/PrisonerAdmin");
        } else {
          console.log("failed");
          alert("Failed");
          setError("Invalid username or password");
        }
      })
      .catch((err) => {
        console.error("Error during login:", err);
        setError("An error occurred. Please try again later.");
      });
  };

  return (
    <center>
    <div className="containers">
    <br/>
    <br/>
    <div className="login-container">
    <div className="login-header" >
       <div className="login-taskbar">
       &nbsp; &nbsp; 
    <div className="login-quick-links">
    <br/>
    <ul>
    <li><Link to="/Login"><b> Prisoner</b> </Link></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <li><Link to="/JailerLogin"><b>Jailer </b></Link></li>
    </ul>
    <br/>
    </div>
    </div>
      <h2 style={{color: "#e74c3c"}}>Prisoner Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="pid"><b>Id:</b></label>
          <input
            type="text"
            id="username"
            value={pid}
            onChange={(e) => setpid(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="pwd"><b>Password:</b></label>
          <input
            type="password"
            id="password"
            value={pwd}
            onChange={(e) => setpwd(e.target.value)}
            required
          />
        </div>
        <button style={{ border: '1', padding: '10px', borderRadius: '1px' }}><Link to="/"><b>Back</b></Link></button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
        <button className='login' style={{borderRadius:'5px'}} type="submit"><b>Login</b></button>
      </form>     
    </div>
    </div>
    <br/>
    <br/> <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
    </center>
  );
};

export default Login;
