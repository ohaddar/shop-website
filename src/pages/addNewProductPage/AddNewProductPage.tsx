import React, { useState } from "react";
import AjoutProduct from "../../components/ajoutProduct/AjoutProduct";
import { ProductFinalProps } from "../../utils/types/type";

const AddNewProductPage: React.FC = () => {
  const [products, setProducts] = useState<ProductFinalProps[]>([]);

  const handleProductAdd = (product: ProductFinalProps) => {
    setProducts([...products, product]);
  };
  return (
    <div>
      <AjoutProduct onProductAdd={handleProductAdd} />
    </div>
  );
};

export default AddNewProductPage;
