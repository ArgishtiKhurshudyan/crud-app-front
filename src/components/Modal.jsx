import React from 'react';

const Modal = ({item, changeVal, changeProduct, handleUpdate}) => {

  return (
    <div>
      <input
        type="text"
        placeholder="update product"
        defaultValue={changeProduct}
        onChange={(e) => changeVal(e.target.value)}
      />
      <button onClick={() => handleUpdate(item.id)}>update</button>
    </div>
  );
};

export default Modal;