import React, {useEffect, useRef, useState} from 'react';
import "./color.scss"
import {useDispatch, useSelector} from "react-redux";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {colorDeleteStart, colorStartCreate, colorUpdateStart, getColorStart} from "../../redux/color/actions";
import {Link} from "react-router-dom";
import Logout from "../register/logout";

const Color = () => {
  const colorName = useRef()
  const [clicked, setClicked] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [changeColor, setChangeColor] = useState()
  const [color, setColor] = useState('')
  const {colorData, isColorGetSuccess, isColorGetStart} = useSelector(state => state.color)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getColorStart())
  }, [])

  const handleCreateColor = () => {
    let color = {
      colorName: colorName.current.value
    }
    if(colorName.current.value) {
      dispatch(colorStartCreate({color}))

    }
    return colorName.current.value = ''
  }

  const handleGetColor = () => {
    dispatch(getColorStart())
    setClicked(true)
  }

  const handleDeleteColor = (id) => {
    dispatch(colorDeleteStart({id: id}))
  }

  const handleEditColor = (id) => {
    setIsEditing(id)
    const col = colorData?.find((color) => color.id === id)
    setChangeColor(col.colorName)
  }

  const handleUpdateColor = (id) => {
    setIsEditing(false)
    const payload = {
      id: id,
      colorName: color
    }
    dispatch(colorUpdateStart(payload))
  }

  const onChangeVal = (val) => {
    setColor(val)
  }

  return (
    <>
      <h1>Colors</h1>
      <Link to="/product" style={{color:"#03a9f4", textDecoration:"none", fontSize:"17px"}}>Go to products</Link>
      <div style={{marginRight:"50px", width:"150px"}}><Logout/></div>
      <div className="color-container">
        <div className="create-container">
          <input
            type="text"
            ref={colorName}
            placeholder="create color"
            required
          />
          <button onClick={handleCreateColor}>Add color</button>
        </div>
        <div className="colors">
          {/*<button className="getColors-btn" onClick={handleGetColor}>get colors</button>*/}
          {colorData?.map((item) =>
            <div className="item" key={item.id}>
              <div className="color-title-div">
                <h1>color:&nbsp;&nbsp;{item.colorName}</h1>
                <div className="changeBtn-div">
                  <button onClick={() =>
                    handleDeleteColor(item.id)}><DeleteForeverIcon style={{color: "#e28282"}}/>
                  </button>
                  <button onClick={() =>
                    handleEditColor(item.id)}><ModeEditIcon/>
                  </button>
                </div>
              </div>
              {isEditing === item.id && <div className="editInput">
                <input
                  type="text"
                  placeholder="update color"
                  defaultValue={changeColor}
                  onChange={(e) => onChangeVal(e.target.value)}
                />
                <button onClick={() => handleUpdateColor(item.id)}>update</button>
              </div>
              }
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Color;