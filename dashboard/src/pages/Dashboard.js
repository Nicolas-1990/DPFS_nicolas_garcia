import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/dashboard.css";

function Dashboard() {

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState({});

  useEffect(() => {

    fetch("http://localhost:3002/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || []);
        setCategories(data.countByCategory || {});
      });

    fetch("http://localhost:3002/api/users")
      .then(res => res.json())
      .then(data => setUsers(data.users || []));

  }, []);

  return (
    <div className="layout">

      <Sidebar />

      <div className="main">

        <Topbar />

        <div className="content">

          {/* CARDS */}
          <div className="cards">
            <div className="card">
              <h3>Productos</h3>
              <p>{products.length}</p>
            </div>

            <div className="card">
              <h3>Usuarios</h3>
              <p>{users.length}</p>
            </div>

            <div className="card">
              <h3>Categorías</h3>
              <p>{Object.keys(categories).length}</p>
            </div>
          </div>

          {/* ÚLTIMO PRODUCTO */}
          <div className="section">
            <h2>Último producto</h2>
            {products.length > 0 ? (
              <div className="box">
                {products[products.length - 1].name}
              </div>
            ) : <p>No hay productos</p>}
          </div>

          {/* CATEGORÍAS */}
          <div className="section">
            <h2>Categorías</h2>
            <ul className="list">
              {Object.entries(categories).map(([name, count], i) => (
                <li key={i}>
                  {name} <span>{count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTOS */}
          <div className="section">
            <h2>Productos</h2>
            <ul className="list">
              {products.map(p => (
                <li key={p.id}>{p.name}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;