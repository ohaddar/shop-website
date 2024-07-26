import React, { useEffect, useState } from "react";
import { ProductFinalProps } from "../../utils/types/type";
import toast from "react-hot-toast";
import api from "../../api/Api";
import { useNavigate } from "react-router-dom";

const ProductCard: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const navigate = useNavigate();

  const [productsAllDatas, setProductsAllDatas] =
    useState<ProductFinalProps[]>();
  useEffect(() => {
    const fetchProducts = async () => {
      api
        .post("/api/produit/all", productsAllDatas)
        .then(function (response) {
          setProductsAllDatas([...response.data, response.data]);
        })
        .catch(function (error) {
          toast.error(error.response.data.message);
        });
    };
    fetchProducts();
  });

  let sortedProducts: ProductFinalProps[] = [];
  if (productsAllDatas) {
    sortedProducts = [...productsAllDatas].sort(
      (a: ProductFinalProps, b: ProductFinalProps) => {
        const prixA = a.prix !== undefined ? Number(a.prix) : 0;
        const prixB = b.prix !== undefined ? Number(b.prix) : 0;

        if (selectedFilter === "prix croissant") {
          return prixA - prixB;
        } else if (selectedFilter === "prix décroissant") {
          return prixB - prixA;
        }
        return 0;
      }
    );
  }
  const user = localStorage.getItem("user");
  const userAuth = user ? JSON.parse(user).role === "USER" : false;
  const handleDetailsSubmit = (id: number) => {
    if (userAuth) {
      navigate(`/user/produit/${id}`);
    } else {
      navigate("account");
    }
  };
  return (
    <div className="container mt-4">
      <select
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
        className="form-select mb-3 w-25 mr-50"
        style={{ marginLeft: "Auto" }}
      >
        <option value="">Trier par</option>
        <option value="prix croissant">prix croissant</option>
        <option value="prix décroissant">prix décroissant</option>
      </select>
      <div className="row">
        {sortedProducts.map((product, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              {product.image && (
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.nom}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{product.nom}</h5>
                <p className="card-text">
                  <strong>Prix:</strong> {product.prix} €
                </p>
              </div>
              <button onClick={() => handleDetailsSubmit(Number(product.id))}>
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
