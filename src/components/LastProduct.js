function LastProduct({ product }) {

  if (!product) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Último producto</h2>
      <p>{product.name}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default LastProduct;