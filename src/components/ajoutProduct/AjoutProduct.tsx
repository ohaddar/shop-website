import React, { useState } from "react";
import TextInput from "../textInput/TextInput";
import { ProductFinalProps } from "../../utils/types/type";
import api from "../../api/Api";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
interface AjoutProductProps {
  onProductAdd: (product: ProductFinalProps) => void;
}

const AjoutProduct: React.FC<AjoutProductProps> = ({ onProductAdd }) => {
  const [id, setId] = useState<number | string>();
  const [nom, setNom] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [prix, setPrix] = useState<number | string>();
  const [image, setImage] = useState<string>("");
  const [tail, setTail] = useState<number | string>();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const newProduct: ProductFinalProps = {
      id,
      nom,
      description,
      prix,
      image,
      tail,
    };
    api
      .post("/api/produit/save", newProduct)
      .then(function (response) {
        onProductAdd(newProduct);
        navigate("/admin/product-list");
        console.log(response);
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-50">
      <div className="col-md-10 col-lg-8 p-4 border rounded shadow">
        <h1 className="text-center mb-4">ADD A New Product</h1>

        <div className="row">
          <div className="col-md-6 mb-3">
            <TextInput
              type="number"
              label="Product ID"
              placeholder="Enter Product ID"
              onChange={(e) => setId(e.target.value)}
              name="productId"
              className="form-control"
            />
          </div>
          <div className="col-md-6 mb-3">
            <TextInput
              type="text"
              label="Product Name"
              placeholder="Enter Product Name"
              onChange={(e) => setNom(e.target.value)}
              name="productName"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Enter Product Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <TextInput
              type="number"
              label="Product Price"
              placeholder="Enter Product Price"
              onChange={(e) => setPrix(e.target.value)}
              name="productPrice"
              className="form-control"
            />
          </div>
          <div className="col-md-6 mb-3">
            <TextInput
              type="file"
              label="Product Image"
              placeholder="Upload Product Image"
              onChange={(e) => {
                setImage(e.target.value[0]);
                console.log(image);
              }}
              name="productImg"
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 mb-3">
            <TextInput
              type="number"
              label="Product Size"
              placeholder="Enter Product Size"
              onChange={(e) => setTail(e.target.value)}
              name="productTaille"
              className="form-control"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Add Product
          </button>
        </div>
        <Link to="/admin/product-list">
          Retournez vers la liste des produits
        </Link>
      </div>
    </div>
  );
};

export default AjoutProduct;
