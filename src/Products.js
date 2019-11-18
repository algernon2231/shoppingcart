import React, { useState } from 'react'
import Product from './Product'
const Products =  ()  => {
  const [products, setProducts] = useState([
    {id: 1, name: 'IphoneX', price:500, img: 'https://images.fpt.shop/unsafe/fit-in/465x465/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2017/12/8/636483223586180190_3.jpg' },
    {id: 2, name: 'IphoneXS', price:1000,  img: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x460.png' },
    {id: 3, name: 'Ipad Pro 2019', price:8000 , img: 'https://cdn.tgdd.vn/Products/Images/522/195067/ipad-pro-11-inch-2018-64gb-wifi-33397-chitiet-400x460.png' },
    {id: 4, name: 'Samsung galaxy S10', price:4000 , img: 'https://images.fpt.shop/unsafe/fit-in/465x465/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2017/12/8/636483223586180190_3.jpg' },
    {id: 5, name: 'Macbook Air', price:5000, img: 'https://www.smartgeneration.it/wp-content/uploads/2019/05/macbook-retina-12-ricondizionato-grey-g.jpg'},
    {id: 6, name:'Nokia 8.1', price:3000, img: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/21/636809860721137664_nokia81-xanh-1.png' }
  ]) 
  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <Product key= {product.id} product= {product} />
      ))}
    </div>
  ) 
}
export default Products