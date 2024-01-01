import React from "react";
import { useCart } from "../CartContext";

const Cart = () => {
  const {items} = useCart();
  return (
    <>
    <div class = "row m-3" style={{ overflowX: "auto", whiteSpace: "nowrap"}}>
      {items.map((item) => {
        return(
                <div class="card col-3" style={{width: "25%",alignItems:'center', padding: 0, margin: 20}}>
                <img class="card-img-top" width={50} src={item.image} alt="Card image cap"/>
                 <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <h5 class="card-title">{item.price}</h5>
                    <button class="btn btn-dark">Remove</button>
                 </div>
                </div>
        )
      })}
    </div>
    <div>
        total price is: 
    </div>
    </>
  );
};

export default Cart;
