import React, {Fragment, useState} from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import CartIcon from './components/Cart/CartIcon';
import Header from './components/Layout/Header';
import { AvailableMeals } from './components/Meals/AvailableMeals';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = ()=>{

  };
  
  const hideCartHandler = ()=>{
  
  };

return (
  <Fragment>
     {cartIsShown&&<Cart/>}
      <Header/>
       <main>
         <Meals/>
       </main>
   </Fragment>
  );
}

export default App;
