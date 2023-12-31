import React from "react";
import { Juice } from "../utils/Juice";
const MenuSection = () => {
  return (
    <div class="container d-flex flex-row" style={{margin:0, padding: 0}}>
      <div class="panel1 col-4" style={{backgroundColor: '#edefee'}}>
        haha
      </div>
      <div class="panel2 col-8">
        lol
      </div>
    </div>
  );
};

export default MenuSection;

{/* <div class="container d-flex flex-row" style={{gap: '20px', margin: '15px auto'}}>
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
    </div> */}
