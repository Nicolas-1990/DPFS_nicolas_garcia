function Categories({ categories }) {

  return (
    <div>
      <h2>Categorías</h2>

      <ul>
        {Object.entries(categories).map(([name, count], i) => (
          <li key={i}>
            {name}: {count}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Categories;