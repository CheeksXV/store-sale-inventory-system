import React from "react";
import AddProduct from "../components/AddProduct";
import ManageList from "../components/ManageList";
import SideNavigation from "../components/SideNavigation";
import { ProductsContextProvider } from "../context/ProductsContext";

const ManageProducts = () => {
  return (
    <ProductsContextProvider>
      <div className="App">
        <div className="home-wrapper">
          <SideNavigation />
          <ManageList />
          <AddProduct />
        </div>
      </div>
    </ProductsContextProvider>
  );
};

export default ManageProducts;
