const ButtonDelete = ({ idProduct, deleteProduct }) => {
  return (
    <button type="button" onClick={() => deleteProduct(idProduct)}>
      <img src="./img/icons/cross.svg" alt="Delete" />
    </button>
  );
};

export default ButtonDelete;
