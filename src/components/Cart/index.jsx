import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Product";
import data from "../../data";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(data);
  const [total, setTotal] = useState({
    price: cart.reduce((prevent, current) => prevent + current.priceTotal, 0),
    count: cart.reduce((prevent, current) => prevent + current.count, 0),
  });

  useEffect(() => {
    setTotal({
      price: cart.reduce((prevent, current) => prevent + current.priceTotal, 0),
      count: cart.reduce((prevent, current) => prevent + current.count, 0),
    });
  }, [cart]);

  const deleteProduct = (idProduct) => {
    setCart(cart.filter((product) => product.id !== idProduct));
  };

  const increase = (idProduct) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === idProduct) {
          return {
            ...product,
            count: ++product.count,
            priceTotal: product.price * product.count,
          };
        }
        return product;
      });
    });
  };

  const decrease = (idProduct) => {
    setCart(
      cart.map((product) => {
        if (product.id === idProduct && product.count > 1) {
          return {
            ...product,
            count: --product.count,
            priceTotal: product.price * product.count,
          };
        }
        return product;
      })
    );
  };

  const changeValue = (id, value) => {
    setCart(
      cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      })
    );
  };

  const products = cart.map((product) => {
    return (
      <Product
        key={product.id}
        product={product}
        deleteProduct={deleteProduct}
        increase={increase}
        decrease={decrease}
        changeValue={changeValue}
      />
    );
  });
  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter total={total} />
    </section>
  );
};

export default Cart;
