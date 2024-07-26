import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../api/Api";
import { useNavigate } from "react-router-dom";
import TextInput from "../textInput/TextInput";
import { Product } from "../../class/productClass/ProductClass";

const ListProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>();
  const [productId, setProductId] = useState<number | string>("");
  const [filtredById, setFiltredById] = useState<Product[]>();

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      await api
        .post("/api/produit/all")
        .then(function (response) {
          const listProducts = response.data.map(
            (product: Product) =>
              new Product(
                product.id,
                product.nom,
                product.description,
                product.prix,
                product.image,
                product.tail
              )
          );

          setProducts(listProducts);
        })
        .catch(function (error) {
          toast.error(error.response.data.message);
        });
    };
    fetchData();
  }, []);

  const handleAddClick = () => {
    navigate("/admin/add-product");
  };
  const handleFilterClick = () => {
    const filtredProduct = products?.filter(
      (product) => product.id == productId
    );
    if (filtredProduct) {
      setFiltredById(filtredProduct);
    }
    //navigate("/Home");
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-10">
      <div className="col-md-16 col-lg-12 p-4 border rounded shadow">
        <h1 className="text-center mb-4">Product List</h1>
        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-primary" onClick={handleAddClick}>
            Add A New Product
          </button>
          <div className="d-flex">
            <TextInput
              type="text"
              name="Search"
              placeholder="Search For The Product"
              onChange={(e) => setProductId(e.target.value)}
              className="form-control me-2"
              label=""
            />
            <button className="btn btn-primary" onClick={handleFilterClick}>
              Filter Product
            </button>
          </div>
        </div>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              {filtredById
                ? filtredById.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.nom}</td>
                      <td>{item.description}</td>
                      <td>{item.prix}</td>
                      <td>
                        <img src={item.image} alt={item.nom} width="50" />
                      </td>
                      <td>{item.tail}</td>
                    </tr>
                  ))
                : products &&
                  products.map((product, index) => (
                    <tr key={index}>
                      <td>{product.id}</td>
                      <td>{product.nom}</td>
                      <td>{product.description}</td>
                      <td>{product.prix}</td>
                      <td>
                        <img src={product.image} alt={product.nom} width="50" />
                      </td>
                      <td>{product.tail}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
