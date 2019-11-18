import React, { useContext } from "react";

import { CartContext } from "./CartContext";
const Cart = () => {
  const itemsWithQuantities = cart => {
    return cart.reduce((acc, item) => {
      const found = acc.find(_item => _item.id === item.id);
      if (found) {
        found.qtt = found.qtt + 1;
      } else {
        acc.push({
          qtt: 1,
          ...item
        });
      }
      return acc;
    }, []);
  };
  const [cart, setCart] = useContext(CartContext);
  const new_cart = itemsWithQuantities(cart);

  const total = new_cart.reduce((acc, item) => {
    return acc + item.price * item.qtt;
  }, 0);

  const delItem = id => {
    setCart(new_cart.filter(item => item.id !== id));
  };

  const handleChange = (id, e) => {
    let qty = parseInt(e.target.value, 10);
    if (qty === 0) {
      delItem(id);
    }
    const update_qtt = new_cart.map(item =>
      item.id === id ? { ...item, qtt: qty } : item
    );
    setCart(update_qtt);
  };
  return (
    <div>
      <h1>Cart</h1>
      <h2>Products</h2>
      {new_cart.map(item => (
        <h5 key={item.id}>
          Name:&nbsp;<strong>{item.name}</strong> || Qtt:{" "}
          <input
            min="0"
            onChange={e => handleChange(item.id, e)}
            type="number"
            value={item.qtt}
          />{" "}
          || Price: <strong>{item.price * item.qtt}$</strong> ||{" "}
          <span onClick={e => delItem(item.id, e)}>X</span>{" "}
        </h5>
      ))}
      <hr />
      <h5>
        Total : <strong>{total}$</strong>
      </h5>
    </div>
  );
};
export default Cart;
