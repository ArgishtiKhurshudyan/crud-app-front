import React, {useEffect, useRef, useState} from 'react';
import "./color.sass"
import {useDispatch, useSelector} from "react-redux";
import {colorDeleteStart, colorStartCreate, colorUpdateStart, getColorStart} from "../../redux/color/actions";

const Color = () => {
  const colorName = useRef()
  const [clicked, setClicked] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [changeColor, setChangeColor] = useState()
  const [color, setColor] = useState('')
  const {colorData} = useSelector(state => state.color)
  const dispatch = useDispatch()

  const handleCreateColor = () => {
    let color = {
      colorName: colorName.current.value
    }
    dispatch(colorStartCreate({color: color}))
    dispatch(getColorStart())
  }
  const handleGetColor = () => {
    dispatch(getColorStart())
    setClicked(true)
  }
  const handleDeleteColor = (id) => {
    dispatch(colorDeleteStart({id: id}))
  }
  const handleEditColor = (id) => {
    setIsEditing(true)
    const col = colorData.find((color) => color.id === id)
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
    <div className="color-container">
      <div className="create-container">
        <input
          type="text"
          ref={colorName}
          placeholder="create color"
        />
        <button onClick={handleCreateColor}>Create color</button>
      </div>
      <div className="colors">
        <button onClick={handleGetColor}>get colors</button>
        {clicked && colorData.map((item) =>
          <div className="item" key={item.id}>
            <h1>colorName:{item.colorName}</h1>
            <button onClick={() =>
              handleDeleteColor(item.id)}>delete
            </button>
            <button onClick={() =>
              handleEditColor(item.id)}>edit
            </button>
            {isEditing && <div className="editInput">
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
  );
};

export default Color;