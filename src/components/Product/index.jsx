import { useState } from "react";
import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import "./style.scss";
import formatPrice from "../../utils/priceFormatter";

const Product = ({ product, deleteProduct, increase, decrease, changeValue }) => {
  const {img, title, priceTotal, count, id} = product;
  
    return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${img}`} alt={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count idProduct={id} productCount={count} increase={increase} decrease={decrease} changeValue={changeValue} />
      </div>
      <div className="product__price">{formatPrice(priceTotal)} руб.</div>
      <div className="product__controls">
        <ButtonDelete idProduct={id} deleteProduct={deleteProduct}/>
      </div>
    </section>
  );
};

export default Product;
