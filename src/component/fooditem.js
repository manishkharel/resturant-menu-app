import React from 'react'
import Product from './product';

function Fooditem(props) {
    const {products, onAdd}= props;
  return (
    <main className="block col-2">
        <h2>Menu</h2>
        <div className="row">
            {products.map((product) => (
                <Product key={product.id} product={product} onAdd={onAdd}></Product>
            ))}
        </div>
    </main>
  )
}

export default Fooditem;