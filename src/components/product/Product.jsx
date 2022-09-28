import React, {useEffect, useState} from 'react';
import "./product.scss"
import {useDispatch, useSelector} from "react-redux";
import {
  getProductStart,
  productDeleteStart,
  productStartCreate,
  productUpdateStart
} from "../../redux/product/actions";
import Modal from "../Modal";
import {getColorStart} from "../../redux/color/actions";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Link} from "react-router-dom";
import Logout from "../register/logout";

const Product = () => {
  const [isClick, setIsClick] = useState(false)
  const [isEditing, setIsEditing] = useState("")
  const [target, setTarget] = useState(false)
  const [colors, setColors] = useState([])
  const [changeProduct, setChangeProduct] = useState("")
  const [product, setProduct] = useState('')
  const [formData, setFormData] = useState({
    productName: '',
    colors: []
  })
  const dispatch = useDispatch();
  const {data, isProductGetSuccess} = useSelector(state => state.product)
  const {colorData} = useSelector(state => state.color)

  useEffect(() => {
    dispatch(getColorStart())
  }, [])

  useEffect(() => {
    dispatch(getProductStart())
  }, [])

  const handleCreate = () => {

    const product = {
      productName: formData.productName,
      colors: formData.colors,
    }
    if (formData.productName) {
      dispatch(productStartCreate({product: product}))
      setIsClick(true)
    }
    return {
      fromData: formData.productName = "",
      colorData: formData.colors = []
    }
  }

  const handleDelete = (id) => {
    dispatch(productDeleteStart({id}))
  }

  // const handleGet = () => {
  //   dispatch(getProductStart())
  //   setIsClick(true)
  //
  // }

  const handleEditProduct = (id) => {
    setIsEditing(id)
    const prod = data?.find((item) => item.id === id)
    setChangeProduct(prod.productName)
  }

  const handleUpdate = (id) => {
    setIsEditing('')
    console.log('product', product)
    const payload = {
      id: id,
      productName: product
    }
    dispatch(productUpdateStart(payload))

  }

  const changeVal = (val) => {
    setProduct(val)
    setChangeProduct('')
  }

  const handleChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }))
  }

  const addActiveColor = (color) => {
    document.getElementById(color.id).classList.add("active");
    setColors(color)
    setIsClick(false)
  }

  return (
    <>
      <h1>Products</h1>
      <Link to="/color" style={{color: "#03a9f4", textDecoration: "none", fontSize: "17px"}}>Go to color</Link>
      <Logout/>
      <div className="product-container">
        <div className="product-create">
          <h3>Create product</h3>
          <input
            type="text"
            placeholder="product name"
            value={formData['productName']}
            required
            onChange={(e) => handleChange('productName', e.target.value)}
          />
          <button className="create-btn-prod" onClick={handleCreate}>create</button>
          <div className="colors-div">
            <h3>Select product color</h3>
            {colorData?.map((item) => (
              <div className="select-color-container">
                <button id={item.id} className={isClick && ""} onClick={(e) => {
                  addActiveColor(item)
                  formData.colors.push(item.id)
                }}
                >
                  {item.colorName}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="products">
          <h3 style={{color: "white"}}>Created products</h3>
          {/*<button className="get-btn-prod" onClick={handleGet}>get</button>*/}
          {data?.map((item) => (
              <div className="items-div">

                <div className="items">
                  <div>
                    <span>product: {item?.productName}</span>
                    <div> color:{
                      item?.colors?.map((color) => {
                        return (
                          <span style={{margin: "5px"}}>{
                            color?.colorName
                          }</span>
                        )
                      })
                    }
                    </div>
                  </div>
                  <div className="change-btn">
                    <button onClick={() => handleDelete(item.id)}><DeleteForeverIcon style={{color: "#e28282"}}/></button>
                    <button onClick={() => handleEditProduct(item.id)}><ModeEditIcon style={{color: "white"}}/></button>
                  </div>
                </div>
                {isEditing === item.id &&
                <Modal changeProduct={changeProduct}  changeVal={changeVal} handleUpdate={handleUpdate} item={item}/>
                }
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
