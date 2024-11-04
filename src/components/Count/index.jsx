import "./style.scss";

const Count = ({ idProduct, productCount, increase, decrease, changeValue }) => {
  return (
    <div className="count">
      <div className="count__box">
        <input
          type="number"
          className="count__input"
          min="1"
          max="100"
          value={productCount}
          onChange={(e) => changeValue(idProduct, +e.target.value)}
        />
      </div>
      <div className="count__controls">
        <button type="button" className="count__up" onClick={() => increase(idProduct)}>
          <img src="./img/icons/icon-up.svg" alt="Increase" />
        </button>
        <button type="button" className="count__down" onClick={() => decrease(idProduct)}>
          <img src="./img/icons/icon-down.svg" alt="Decrease" />
        </button>
      </div>
    </div>
  );
}

export default Count;
