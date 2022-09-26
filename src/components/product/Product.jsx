import React, {useRef, useState} from 'react';
import "./product.sass"
import {useDispatch, useSelector} from "react-redux";
import {getProductStart, productDeleteStart, productStartCreate, productUpdateStart} from "../../redux/product/actions";
import {colorUpdateStart} from "../../redux/color/actions";

const Product = () => {
  const [isClick, setIsClick] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [changeProduct, setChangeProduct] = useState("")
  const [product, setProduct] = useState('')
  const [formData, setFormData] = useState({
    productName: '',
    colors: ''
  })
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.product)

  const handleCreate = () => {
    const product = {
      productName: formData.productName,
      colors: formData.colors,
    }
    dispatch(productStartCreate({product}))
  }

  const handleDelete = (id) => {
    dispatch(productDeleteStart({id}))
  }
  const handleGet = () => {
    dispatch(getProductStart())
    setIsClick(true)
    console.log("data", data)
  }
  const handleEditProduct= (id) => {
    setIsEditing(true)
    const prod = data.find((item) => item.id === id)
    setChangeProduct(prod.productName)
  }

  const handleUpdate = (id) => {
    setIsEditing(false)
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
          onChange={(e) => handleChange('productName', e.target.value)}
        />
        <h3>product color</h3>
        {/*<input*/}
        {/*  type="number"*/}
        {/*  placeholder="product color"*/}
        {/*  value={formData['colors']}*/}
        {/*  onChange={(e) => handleChange('colors', e.target.value)}*/}
        {/*/>*/}
        <button onClick={handleCreate}>create product</button>
      </div>

      <div className="products">
        <button onClick={handleGet}>get</button>
        {isClick && data.map((item) => (
            <div className="items">
              <span>{item.productName}</span>
              <button onClick={() => handleDelete(item.id)}>delete</button>
              <button onClick={() => handleEditProduct(item.id)}>edit</button>
              {isEditing && <div className="editInput">
                <input
                  type="text"
                  placeholder="update product"
                  defaultValue={changeProduct}
                  onChange={(e) => changeVal(e.target.value)}
                />
                <button onClick={() => handleUpdate(item.id)}>update</button>
              </div>
              }
            </div>


          )
        )}
      </div>
    </div>
  );
};

export default Product;