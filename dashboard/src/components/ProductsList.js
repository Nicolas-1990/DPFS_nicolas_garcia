function ProductsList({ products }) {

  if (!products || products.length === 0) {
    return <p>No hay productos</p>;
  }

  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}

export default ProductsList;