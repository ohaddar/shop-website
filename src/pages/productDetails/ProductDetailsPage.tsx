import React, { useEffect, useState } from "react";
import api from "../../api/Api";
import { ProductFinalProps } from "../../utils/types/type";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../../class/userClass/UserClass";

const ProductDetailsPage: React.FC = () => {
  const [idPro, setIdPro] = useState<ProductFinalProps>();
  const { id } = useParams<{ id: string }>();
  const [selectedValue, setSelectedValue] = useState<string | number>();
  const [user, setUser] = useState<User>();
  const [product, setProduct] = useState<ProductFinalProps>();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProductById = async () => {
      api
        .post(`/api/produit/${id}`, idPro)
        .then(function (response) {
          setIdPro(response.data);
          setProduct(response.data);
        })
        .catch(function (error) {
          toast.error(error.response.data.message);
          console.log(error.message);
        });
    };
    if (id) {
      fetchProductById();
    }
  }, [id]);

  useEffect(() => {
    const fetchUserDetails = () => {
      const loggedInUserJson = localStorage.getItem("user");
      if (loggedInUserJson) {
        const loggedInUser = JSON.parse(loggedInUserJson);
        setUser(
          new User(
            loggedInUser.id,
            loggedInUser.nom,
            loggedInUser.prenom,
            loggedInUser.email,
            loggedInUser.mdp,
            loggedInUser.role
          )
        );
      } else {
        console.log("No user is logged in.");
      }
    };

    fetchUserDetails();
  }, []);
  const handleCommandeSubmit = async () => {
    /**  
  const handleDetailsSubmit = (id: number) => {
    if (userAuth) {
      navigate("user/commandes");
    } else {
      navigate("/commandes");
    }
  }; */
    setSelectedValue(selectedValue);
    if (!selectedValue) {
      toast.error("Please select a quantity.");
      return;
    }

    if (user && product && selectedValue) {
      const orderData = {
        idUser: user.id,
        idProduit: product.id,
        qte: selectedValue,
      };
      const userConnected = localStorage.getItem("user");
      const userAuth = userConnected
        ? JSON.parse(userConnected).role === "USER"
        : false;
      api
        .post("/api/commande/save", orderData)
        .then(function (response) {
          console.log(response.data);
          localStorage.setItem("productToCom", JSON.stringify(orderData));
          if (userAuth) {
            navigate("/user/commandes");
          } else {
            navigate("/commandes");
          }
        })
        .catch(function (error) {
          toast.error(
            error.response?.data?.message || "Failed to submit order."
          );

          console.log(error.response.data.message);
        });
    }
  };

  return (
    <div>
      <h2>Détails du produit</h2>
      <img src={idPro?.image} alt={idPro?.nom} style={{ maxWidth: "100%" }} />
      <h3>{idPro?.nom}</h3>
      <p>Prix: {idPro?.prix} €</p>
      <p>Description: {idPro?.description}</p>
      <p>Taille: {idPro?.tail}</p>
      <label>
        Quantité :
        <select
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="">Select A Quantity</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <button onClick={handleCommandeSubmit}>Commander</button>
    </div>
  );
};

export default ProductDetailsPage;
