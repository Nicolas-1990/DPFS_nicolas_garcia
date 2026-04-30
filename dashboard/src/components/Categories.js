function Categories({ categories }) {

  if (!categories) return null;

  return (
    <ul>
      {Object.entries(categories).map(([name, count], i) => (
        <li key={i}>{name}: {count}</li>
      ))}
    </ul>
  );
}

export default Categories;