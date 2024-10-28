import "./style.scss"

const Product = () => {
    return(
        <section className="product">
            <div className="product__img"><img src="./img/products/macbook.jpg" alt="Apple MacBook Air 13" /></div>
                <div className="product__title">Apple MacBook Air 13</div>
                    <div className="product__count">
                        <div className="count">
                            <div className="count__box">
                                <input type="number" className="count__input" min="1" max="100" value="1" />
                            </div>
                            <div className="count__controls">
                                <button type="button" className="count__up">
                                    <img src="./img/icons/icon-up.svg" alt="Increase" />
                                </button>
                                <button type="button" className="count__down">
                                    <img src="./img/icons/icon-down.svg" alt="Decrease" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product__price">110 000 руб.</div>
                    <div className="product__controls">
                        <button type="button">
                            <img src="./img/icons/cross.svg" alt="Delete" />
                        </button>
                    </div>
        </section>
    );
}

export default Product;