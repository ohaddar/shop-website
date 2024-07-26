import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root";
import ProductsPage from "../pages/productsPage/ProductsPage";
import ProductCard from "../components/productCard/ProductCard";
import MainLayout from "./mainLayout/MainLayout";
import AdminLayout from "./adminLayout/AdminLayout";
import AddNewProductPage from "../pages/addNewProductPage/AddNewProductPage";
import UsersListPage from "../pages/usersListPage/UsersListPage";
import ProductDetailsPage from "../pages/productDetails/ProductDetailsPage";
import PrivateRoot from "./root/PrivateRoot";
import ContactPage from "../pages/contactPage/ContactPage";
import CommandeList from "../pages/commandeList/CommandeList";
import ProfilePage from "../pages/profilePage/ProfilePage";
import UserRoot from "./root/UserRoot";
import Home from "../pages/home/Home";
import AuthentificationPage from "../pages/authentificationPage/AuthentificationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "account", element: <AuthentificationPage /> },
          { path: "our-products", element: <ProductCard /> },
          { path: "contact", element: <ContactPage /> },
        ],
      },
    ],
  },
  {
    path: "admin",
    element: <PrivateRoot />,
    children: [
      {
        path: "product-list",
        element: <AdminLayout />,
        children: [{ path: "", element: <ProductsPage /> }],
      },
      {
        path: "add-product",
        element: <AdminLayout />,
        children: [{ path: "", element: <AddNewProductPage /> }],
      },
      {
        path: "users-list",
        element: <AdminLayout />,
        children: [{ path: "", element: <UsersListPage /> }],
      },
    ],
  },
  {
    path: "user",
    element: <UserRoot />,
    children: [
      { path: "", element: <Home /> },

      { path: "our-products", element: <ProductCard /> },
      { path: "contact", element: <ContactPage /> },
      { path: "produit/:id", element: <ProductDetailsPage /> },
      { path: "commandes", element: <CommandeList /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);

const Layout: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Layout;
