import React, {useState, useRef} from 'react';
import "./register.scss"
import {useDispatch, useSelector} from "react-redux";
import {getRegisterStart} from "../../redux/user/actions";

const SignUp = () => {
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const password = useRef()
  const dispatch = useDispatch()

  const { data} = useSelector(state => state.user)
  console.log("data", data)
  const handleClick = async (e) => {
    e.preventDefault()
    const user = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    dispatch(getRegisterStart({user: user}))
  }
  return (
    <div className="register-container">
      <form onSubmit={handleClick} className="register-form">
        <label id="name" className="reg-label">First Name</label>
        <input
          id="name"
          ref={firstName}
          type="text"
          placeholder="firstName"
          required
        />
        <label id="name" className="reg-label">Last Name</label>
        <input
          id="name"
          ref={lastName}
          type="text"
          placeholder="lastName"
          required
        />
        <label className="reg-label">Email</label>
        <input
          type="email"
          ref={email}
          placeholder="email"
          required
        />
        <label className="reg-label">Password</label>
        <input
          type="password"
          ref={password}
          placeholder="password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;