import React from 'react'

function Header(props) {
  const {countCartItems} = props;
  
  return (
    <header className="row block center">
        <div className='heading'>
                <h1> Mizori Cafe</h1>
        </div>
        <div>
            <a href='#/cart'>
              
               Cart{' '}
               {countCartItems? (
                 <button className='badge'>{countCartItems}</button>
               ) : ('')
              }

                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> 
                  <a href='#/Order'>
                    Order History
                  </a>
            
        </div>
    </header>
  )
}

export default Header;