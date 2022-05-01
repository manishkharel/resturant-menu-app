import Header from './component/header';
import Fooditem from './component/fooditem';
import Billingamount from './component/billingamount';
import data from './component/data';
import { useState, useEffect } from 'react';

function App() {
  const {products} = data;
  const cartHistory = localStorage.getItem('cart-history');
  const [cartItems, setcartItems] = useState(cartHistory === null ? [] : JSON.parse(cartHistory));
  const onAdd = (product) =>{
    const exist = cartItems.find(x => x.id === product.id);
    if (exist){
      setcartItems(
        cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1}: x)
      )
    }else{
      setcartItems([...cartItems, {...product, qty: 1}]);
    }
  };
  const onRemove =(product) =>{
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty ===1){
      setcartItems(cartItems.filter((x) => x.id !== product.id));
    } else{
      setcartItems(
        cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x )
      );
    }
  }
  useEffect(() => {
    localStorage.setItem('cart-history', JSON.stringify(cartItems));
  });
  return (
    <div className="app">
      <Header countCartItems={cartItems.length}> </Header>
      <div className=''>
        <Fooditem onAdd={onAdd} products={products}></Fooditem>
        <Billingamount onAdd={onAdd} 
        onRemove={onRemove} 
        cartItems={cartItems}> </Billingamount>
      </div>
    </div>
  );
}

export default App;