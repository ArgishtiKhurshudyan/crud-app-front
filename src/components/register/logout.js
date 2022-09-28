import React, {useEffect} from 'react';
import "./register.scss"
import {useNavigate} from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate()

  const handleClick = () => {
   localStorage.removeItem("access_token")
    window.location.replace('/')
  }


  return (
    <div className="logout-container">
      <button onClick={handleClick}>Log out</button>
    </div>
  );
};

export default Logout;