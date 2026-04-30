function LastProduct({ product }) {

  if (!product) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
}

export default LastProduct;