function ProductsList({ products }) {

  return (
    <div>
      <h2>Productos</h2>

      <ul>
        {products.map(p => (
          <li key={p.id} style={{ marginBottom: "10px" }}>
            <strong>{p.name}</strong><br />

            Precio: ${p.price} <br />
            Stock: {p.stock} <br />

            {p.discount > 0 && (
              <span style={{
              background: "green",
              color: "white",
              padding: "2px 6px",
              borderRadius: "5px",
              marginLeft: "10px"
            }}>
            OFERTA
            </span>
            )}

          </li>
        ))}
      </ul>

    </div>
  );
}

export default ProductsList;