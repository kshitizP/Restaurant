import { useEffect, useState } from 'react';
import { getData } from './dataService';
import './MenuPanel.css';
export const MenuPanel = () => {

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState(null);
    const [cartItems, setCartItems] = useState({});
    
    const addItem = (item, id) => {
      if(cartItems[id]) {
        cartItems[id].count += 1;
      } else {
        cartItems[id] = {...item, count: 1};
      }

      setCartItems({...cartItems});
      console.log(cartItems);
    }

    const delItem = (id) => {
      if(cartItems[id]){
        cartItems[id].count -= 1;
        if(cartItems[id].count === 0) {
          delete cartItems[id]
        }
      }
      setCartItems({...cartItems})
      console.log(cartItems)

    }

    useEffect(() => {
        getData('/api/menu').then((res) => {
          setLoading(false);
          if(res !== null){
            setItems(res);
          }
        })
      }, [])
    return (
        <div className="menu-panel">
          {
            loading ? <div>Cooking up Today's Specials...</div> : items === null  ? <div>Sorry We are closed today</div> : 
          <>
          <div className="menu-items">
            <h1>Please Select your dish </h1>
            {
              items.map((item, index) => {
                return <div className="menu-item" key={index}>
                  <img className="item-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaf2zN5fl2e5pkSBrHp8_wSC5V49bMU9G5IQ&usqp=CAU"/>
                  <span className="item-name">{item.RecipeName}</span>
                  <span className="item-price">₹ {item.Price}</span>
                  <span className="item-button add" onClick={() => addItem(item, index)}>+</span>
                </div>
              })
            }
          </div>
          {
            Object.keys(cartItems).length !== 0 ? 
            <div className="cart-items">
              <h1>Ordered Items </h1>
              {
                Object.keys(cartItems).map((item, index) => {
                  return <div className="cart-item" key={index}>
                    <img className="item-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaf2zN5fl2e5pkSBrHp8_wSC5V49bMU9G5IQ&usqp=CAU"/>
                    <span className="item-name">{cartItems[item].RecipeName}</span>
                    <span className="item-price">₹{cartItems[item].Price}</span>
                    <span className="item-button close" onClick={() => delItem(item)}><span>{cartItems[item].count > 1 ? cartItems[item].count : 'x'}</span></span>
                    
                  </div>
                })
              }
              <div style={{textAlign: 'right'}}>
                <h1>
                Total Payable: {Object.keys(cartItems).map(key => Number(cartItems[key].Price * cartItems[key].count)).reduce((a, b) => a+b, 0)}
                </h1>
                <button style={{width: '100%', height: '60px', border: 'none', background: 'black', color: 'white', fontSize: '24px', cursor: 'pointer'}}>Confirm</button>
              </div>
            </div> : ""
          }
          </>
        }
        </div>
    )
}