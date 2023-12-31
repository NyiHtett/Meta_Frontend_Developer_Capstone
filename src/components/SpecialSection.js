import React from "react";
import "./SpecialSection.css";
import { SpecialDishes } from "../utils/SpecialDishes";
import { Link } from "react-router-dom";
const SpecialSection = () => {

  return (
    <div>
      <div class="specialTextRegion">
        <h3>Specials</h3>
        <button type="button" class="btn btn-dark">
          Online Menu
        </button>
      </div>
      <div class="container">
      <div class="specialDishes row">
        {/* display dishes using manual database and the concept of data structure for code effiency */}
        {SpecialDishes.map((dish) => {
          return (
            <div class="card col-4" style={{ width: "18rem", padding: 0}}>
              <img class="card-img-top" src={dish.image} alt="Card image cap" height={200}/>
              <div class="card-body">
                <h5 class="card-title">{dish.title}</h5>
                <p class="card-text">
                  {dish.description}
                </p>
                <a href="#" class="btn btn-dark">
                  Add to the cart
                </a>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default SpecialSection;
