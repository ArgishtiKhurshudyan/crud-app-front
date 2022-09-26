import React, {useEffect, useRef, useState} from 'react';
import "./product.sass"
import {useDispatch, useSelector} from "react-redux";
import {getProductStart, productDeleteStart, productStartCreate, productUpdateStart} from "../../redux/product/actions";
import Modal from "../Modal";
import {getColorStart} from "../../redux/color/actions";

const Product = () => {
  const [isClick, setIsClick] = useState(false)
  const [isEditing, setIsEditing] = useState()
  const [changeProduct, setChangeProduct] = useState("")
  const [product, setProduct] = useState('')
  const [formData, setFormData] = useState({
    productName: '',
    colors: []
  })
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.product)
  const {colorData} = useSelector(state => state.color)
  console.log("data",data)
  useEffect(()=> {
    dispatch(getColorStart())
  }, [])

  const handleCreate = () => {
    const product = {
      productName: formData.productName,
      colors: formData.colors,
    }
    if (formData.productName) {
      dispatch(productStartCreate({product}))

    }
    // return formData.productName = ""
  }

  const handleDelete = (id) => {
    dispatch(productDeleteStart({id}))
  }

  const handleGet = () => {
    dispatch(getProductStart())
    setIsClick(true)
    // console.log("colorData", colorData)
  }

  const handleEditProduct = (id) => {
    setIsEditing(id)
    const prod = data?.find((item) => item.id === id)
    setChangeProduct(prod.productName)
  }

  const handleUpdate = (id) => {
    setIsEditing('')
    const payload = {
      id: id,
      productName: product
    }
    dispatch(productUpdateStart(payload))
  }

  const changeVal = (val) => {
    setProduct(val)
  }

  const handleChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }))
  }

  return (
    <div className="product-container">
      <h1>Products</h1>
      <div className="product-create">
        <h3>product name</h3>
        <input
          type="text"
          placeholder="product name"
          value={formData['productName']}
          required
          onChange={(e) => handleChange('productName', e.target.value)}
        />
        <h3>product color</h3>
        <input
          placeholder="product color"
          value={formData['colors']}
          onChange={(e) => handleChange('colors', e.target.value)}
        />
        <button onClick={handleCreate}>create product</button>
      </div>

      <div className="products">
        <button onClick={handleGet}>get</button>
        {data?.map((item) => (
            <div className="items">
              <span>product: {item?.productName}</span>
              <div> color:{
                item?.colors?.length && item?.colors?.map((color) => {
                  return (
                    <span style={{margin: "5px"}}>{
                      color.colorName
                    }</span>
                  )
                })
              }
              </div>
              <button onClick={() => handleDelete(item.id)}>delete</button>
              <button onClick={() => handleEditProduct(item.id)}>edit</button>
              {isEditing === item.id &&
              <Modal changeProduct={changeProduct} changeVal={changeVal} handleUpdate={handleUpdate} item={item}/>
              }
            </div>
          )
        )}
        <>
          {colorData?.map((item) => (
            <div className="colors">
              <h5 onClick={(e) => {
                formData.colors.push(item.id)
              }}>
                {item.colorName}
              </h5>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default Product;
