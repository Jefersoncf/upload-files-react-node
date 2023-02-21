import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:3000/products");
    setProducts(res.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/products/${productId}`);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container mt-5">
      <Link to="/add" className="button is-success is-hovered">
        Novo Produto
      </Link>
      <div className="columns is-multline">
        {products.map((product) => (
          <div key={product.id} className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={product.url} alt="imagem do produto" />
                </figure>
              </div>

              <div className="card-content">
                <div className="madia">
                  <div className="media-content">
                    <p className="title is-4">{product.name}</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
              </div>

              <footer className="card-footer">
                <Link to={`edit/${product.id}`} className="card-footer-item">
                  Editar
                </Link>
                <a
                  onClick={() => deleteProduct(product.id)}
                  className="card-footer-item"
                >
                  Apagar
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
