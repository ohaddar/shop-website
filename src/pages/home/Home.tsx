import React, { useEffect, useState } from "react";
import { ProductFinalProps } from "../../utils/types/type";
import api from "../../api/Api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [homeProducts, setHomeProducts] = useState<ProductFinalProps[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      api
        .post("/api/produit/all", homeProducts)
        .then(function (response) {
          setHomeProducts(response.data.slice(0, 4));
        })
        .catch(function (error) {
          toast.error(error.response.data.message);
        });
    };
    fetchProducts();
  });
  const user = localStorage.getItem("user");
  const userAuth = user ? JSON.parse(user).role === "USER" : false;
  const handleHomePageSubmit = (id: number) => {
    if (userAuth) {
      navigate(`/user/produit/${id}`);
    } else {
      navigate("account");
    }
  };
  /*const handleHomePageSubmit = () => {
    navigate("/account");
  };*/
  return (
    <div className="container mt-4">
      <div className="row">
        {homeProducts &&
          homeProducts.map((product, index) => (
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
                <button
                  onClick={() => handleHomePageSubmit(Number(product.id))}
                >
                  More Details
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
