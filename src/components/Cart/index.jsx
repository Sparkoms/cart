import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Product";
import data from "../../data";
import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(data);

  const products = cart.map((product) => {
    return <Product key={product.id} product={product} />
  });
  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter />
    </section>
  );
};

export default Cart;
