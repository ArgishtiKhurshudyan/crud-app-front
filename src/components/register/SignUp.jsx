import React, {useState, useRef, useEffect} from 'react';
import "./register.scss"
import {useDispatch, useSelector} from "react-redux";
import {getRegisterStart} from "../../redux/user/actions";
import {useNavigate, Link} from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignUp = () => {
  const [closeIcon, setCloseIcon] = useState(false)
  const [openIcon, setOpenIcon] = useState(false)
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const password = useRef()
  const confirmPassword = useRef()
  const dispatch = useDispatch()
  const {isRegisterFailure, isRegisterSuccess, errorMessage} = useSelector(state => state.user)
  const [message, setMessage] = useState(errorMessage)

  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    const user = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    if(password.current.value.length === 8){
      if (password.current.value === confirmPassword.current.value) {
        dispatch(getRegisterStart({user: user}))
      } else {
        setMessage("confirm password is wrong")
      }
    } else {
      setMessage("password must be 8 digits")
    }
  }
  useEffect(() => {
    if (isRegisterSuccess) {
      navigate("/")
    }
  }, [isRegisterSuccess])

  useEffect(() => {
    if (isRegisterFailure) {
      setMessage(errorMessage)
    }
  }, [isRegisterFailure])

  const handleClickIcon = (e) => {
    setCloseIcon(!closeIcon)
  }
  const handleClickOpenIcon = (e) => {
    setOpenIcon(!openIcon)
  }

  return (
    <>
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
          <div className="closeIcon">
            <label className="reg-label">Password</label>
            <input
              type={closeIcon ? "text" : "password"}
              ref={password}
              placeholder="password"
              required
            />
            <div onClick={handleClickIcon} className="icon">{closeIcon ? <RemoveRedEyeIcon/> :
              <VisibilityOffIcon/>}</div>
          </div>
          <div className="closeIcon">
            <label className="reg-label">Confirm password</label>
            <input
              type={openIcon ? "text" : "password"}
              ref={confirmPassword}
              placeholder="confirm password"
              required
            />
            <div onClick={handleClickOpenIcon} className="icon">
              {openIcon ? <RemoveRedEyeIcon/> : <VisibilityOffIcon/>}
            </div>
          </div>

          <button type="submit">Submit</button>
          <Link to="/" style={{textDecoration: "none", color: "blue", fontWeight: "600"}}>signIn</Link>
          <div style={{color: "red"}}>{message}</div>
        </form>
      </div>
    </>
  );
};

export default SignUp;