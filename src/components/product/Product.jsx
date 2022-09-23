import React, {useRef, useState} from 'react';
import "./product.sass"
import {useDispatch, useSelector} from "react-redux";
import {getProductStart, productDeleteStart, productStartCreate} from "../../redux/product/actions";

const Product = () => {
  const [isClick, setIsClick] = useState(false)
  const productNames = useRef()
  const colors = useRef()
  const [formData, setFormData] = useState({
    productNames: '',
    colors: ''
  })
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.product)

  console.log(data);
  debugger
  const handleCreate = () => {
    const product = {
      productNames: formData.productNames,
      colors: formData.colors,
    }
    dispatch(productStartCreate({product}))
  }

  const handleUpdate = () => {

  }

  const handleDelete = (id) => {
    dispatch(productDeleteStart({id}))
  }
  const handleGet = () => {
    dispatch(getProductStart())
    setIsClick(true)
    console.log("data", data)
  }

  const handleChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }))
  }
  console.log('dataRef.current[\'colors\']',formData['colors'])
  console.log('dataRef.current[\'productNames\']',formData['productNames'])
  return (
    <div className="product-container">
      <h1>Products</h1>
      <div className="product-create">
        <h3>product name</h3>
        <input
          type="text"
          placeholder="product name"
          value={formData['productNames']}
          onChange={(e) => handleChange('productNames', e.target.value)}
        />
        <h3>product color</h3>
        <input
          type="number"
          placeholder="product color"
          value={formData['colors']}
          onChange={(e) => handleChange('colors', e.target.value)}
        />
        <button onClick={handleCreate}>create product</button>
      </div>

      <div className="products">
        <button onClick={handleGet}>get</button>
        {isClick && data.map((item) => (
            <div className="items">
              <span>{item.productName}</span>
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </div>
          )

        )}
      </div>


    </div>
  );
};

export default Product;