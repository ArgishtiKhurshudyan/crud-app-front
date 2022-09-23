import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom"
import "./register.scss"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getLoginStart} from "../../redux/user/actions";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const navigate = useNavigate()
  const {isLoginStart, isLoginSuccess, isLoginFailure, data} = useSelector(state => state.user)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
  };

  const handleClick =  (e) => {
    e.preventDefault()
    dispatch(getLoginStart({credentials: credentials}))
 // setTimeout(() => {
 //   // if(isLoginSuccess === true) {
 //   //   navigate("/signUp")
 //   // }
 // },300)
  }


  return (
    <div className="register-container">
     <form onSubmit={handleClick} className="register-form">
        <label className="reg-label">Email</label>
        <input type="email" placeholder="email" id="email" onChange={handleChange}/>
        <label className="reg-label">Password</label>
        <input type="password" placeholder="password" id="password" onChange={handleChange}/>
        <button type="submit">{isLoginStart ? "loading..." : "Submit"}</button>
      </form>
      <Link to="/signUp">
        <button>sign up</button>
      </Link>
    </div>

  );
};

export default SignIn;