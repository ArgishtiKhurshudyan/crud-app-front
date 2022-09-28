import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom"
import "./register.scss"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getLoginStart} from "../../redux/user/actions";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [closeIcon, setCloseIcon] = useState(false)
  const navigate = useNavigate()
  const {isLoginStart, isLoginSuccess, isLoginFailure, errorMessage} = useSelector(state => state.user)
  const [message, setMessage] = useState(errorMessage)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
  };

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(getLoginStart({credentials: credentials}))
    if (isLoginSuccess) {
      navigate("/product")
    }
  }

  useEffect(() => {
    if (isLoginFailure) {
      setMessage(errorMessage);
    }
  }, [isLoginFailure])

  const handleClickIcon = (e) => {
    setCloseIcon(!closeIcon)
  }
  return (
    <div className="register-container">
      <form onSubmit={handleClick} className="register-form">
        <label className="reg-label">Email</label>
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          required
        />
        <div className="closeIcon">
          <label className="reg-label">Password</label>
          <input
            type={closeIcon ? "text" : "password"}
            placeholder="password"
            id="password"
            onChange={handleChange}
            required
          />
          <div onClick={handleClickIcon} className="icon">{closeIcon ? <RemoveRedEyeIcon/> :
            <VisibilityOffIcon/>}</div>
        </div>
        <button type="submit">{isLoginStart ? "loading..." : "Submit"}</button>
        <Link to="/signUp" style={{width: "90px"}}>
          <button className="signUp-btn">signUp</button>
        </Link>
        <div style={{color: 'red'}}>{message}</div>
      </form>

    </div>

  );
};

export default SignIn;