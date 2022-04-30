import Header from './component/header';
import Fooditem from './component/fooditem';
import Billingamount from './component/billingamount';
import data from './component/data';
import { useState ,useEffect} from 'react';


function App() {
  const {products} = data;
  const [cartItems,setcartItems] = useState([]);
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
  
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}> </Header>
      <div className='row'>
        <Fooditem onAdd={onAdd} products={products}></Fooditem>
        <Billingamount onAdd={onAdd} 
        onRemove={onRemove} 
        cartItems={cartItems}> </Billingamount>
      </div>
    </div>
  );
 


}

export default App;