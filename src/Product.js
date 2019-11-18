import React  ,{useContext}from 'react'
import { CartContext } from './CartContext'


const Product = ({product}) => {
  const [cart,setCart] = useContext(CartContext)
  const addCart = () => {
    setCart([...cart,product])
  }
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <h3>Name: {product.name}</h3>
          <h4>Price:{product.price}$</h4>
          <button onClick ={addCart} type="button" className="btn-xm btn-primary">Add to cart</button>
        </div>
        <div className="col-md-4">
          <img src= {product.img} alt = "product_img" height="50px" />
        </div>
      </div>
      <hr/>
  </div>
  )
}
export default Product