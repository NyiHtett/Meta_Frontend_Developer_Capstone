import React, { useState } from "react";
import { Catalog } from "../utils/Catalog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MenuSection.css";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
const MenuSection = () => {
  const [catalog, pickCatalog] = useState(1);
  const { items, addItem } = useCart([]);
  return (
    <div class="container d-flex flex-row" style={{ margin: 0, padding: 0 }}>
      <div class="panel1 col-4" style={{ backgroundColor: "#edefee" }}>
        <div class="d-flex flex-column">
          {Catalog.map((item) => {
            return (
              <div
                class={`MenuSectionCatalog ${
                  catalog == item.id ? "ClickedMenuCatalog" : ""
                }`}
                key={item.id}
                onClick={() => {
                  pickCatalog(item.id);
                }}
              >
                <img src={item.icon} /> {item.name}
              </div>
            );
          })}
        </div>
      </div>
      <div class="panel2 col-8">
        {/* checking if one catagory with specific number is picked */}
        <div class="row" style={{ padding: 0, margin: 0 }}>
          {Catalog.map(
            (item) =>
              item.id === catalog && (
                <>
                  {/* loop through for specific catagory */}
                  {item.list.map((miniItem) => (
                    <div
                      style={{ textDecoration: "none", color: "black" }}
                      class="MenuSectionCatalog col-4"
                      onClick={() => {
                        addItem(miniItem);
                        toast(miniItem.name + " is added to the cart", {
                          autoClose: 2000,
                        });
                      }}
                    >
                      <img src={miniItem.image} /> {miniItem.name}
                      <ToastContainer />
                    </div>
                  ))}
                </>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;

{
  /* <div class="container d-flex flex-row" style={{gap: '20px', margin: '15px auto'}}>
      {Juice.map((item) => {
        return (
          <div class="card" style={{width: "10rem", boxShadow: '1px 1px 1px black'}}>
            <img class="card-img-top" src={item.image} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">
                {item.description}
              </p>
              <a href="#" class="btn btn-dark">
                Add cart
              </a>
            </div>
          </div>
        );
      })}
    </div> */
}
