import React from 'react';
// import data from './data';



function Product(props) {
    const {product, onAdd}= props;
  return (
    <div>
        <img className='small' src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <div>NRP {product.price}</div>
        <div>
            <button onClick={() => onAdd(product)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product;