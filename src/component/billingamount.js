import React from 'react'

function Billingamount(props) {
  
  const {cartItems, onAdd, onRemove} = props;
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemPrice * 0.13;
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + taxPrice +shippingPrice;
  return (
    <aside className=" block col-1">
        <h2>Cart Items</h2>
        <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
        {cartItems.map((item) =>(
          <div key={item.id} className='row'>
            <div className='col-2'> {item.name} </div>
            <div className='col-2'>
              <button onClick={() => onAdd(item)} className='add'>
                +
              </button>
              <button onClick={() => onRemove(item)} className='remove'>
                -
              </button>
            </div>
            <div className='col-2 text-right'>
              {item.qty} x NRP {item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
         
          <hr></hr>
          <div className='row'>
            <div className='col-2'> Items Price</div>
             <div className='col-1 text-right'> NRP {itemPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2'> Tax Price</div>
             <div className='col-1 text-right'> NRP {taxPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2'> Shipping Price</div>
             <div className='col-1 text-right'> NRP {shippingPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2'><strong> Total Price </strong></div>
             <div className='col-1 text-right'> <strong>NRP {totalPrice.toFixed(2)}</strong></div>
          </div>
          <hr/>
          <div className='row'>
            <button onClick={() => {alert("checkout successful"); window.location.reload();}}>
              Checkout
            </button>
          </div>
          </>
        )}
    </aside>
  )
}

export default Billingamount;