import React, { useState } from 'react'
import Cart from './Cart'
import Products from './Products'
import { CartContext } from './CartContext'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

function App() {
  const [cart, setCart] = useState([])

  return (
    <Router>
      <div>
         <nav>
           <ul>
             <li><Link  to='/'>Home</Link></li>
             <li><Link to ='/cart'>Cart</Link></li>
           </ul>
         </nav>
         <Switch>
          <CartContext.Provider value= {[cart, setCart]}>
            <Route exact path ='/cart'><Cart /></Route>
            <Route exact path = '/'><Products /></Route>
          </CartContext.Provider>
         </Switch>
      </div>
    </Router>
  );
}

export default App