import React, { useState } from "react";
import { Catalog } from "../utils/Catalog";
import './MenuSection.css';
import { Juice } from "../utils/Juice";
const MenuSection = () => {
  const [catalog, pickCatalog] = useState(0);
  return (
    <div class="container d-flex flex-row" style={{margin:0, padding: 0}}>
      <div class="panel1 col-4" style={{backgroundColor: '#edefee'}}>
        <div class="d-flex flex-column">
        {Catalog.map((item)=> {
          return(
            <div class="MenuSectionCatalog" key={item.id} onClick={()=>pickCatalog(item.id)}>
              <img src={item.icon}/> {item.name}
            </div>
          )
        })}
        </div>
      </div>
      <div class="panel2 col-8">
        {/* checking if one catagory is picked */}
        {(catalog == 0) ? 'Go wild by picking one catagory!' :
        // if picked render the following elements
        <div class="row" style={{padding: 0, margin: 0}}>
          {Catalog.map((item) => (
            ((item.id === catalog) && (
            <>
            {/* loop through for specific catagory */}
            {item.list.map((miniItem) => (
              <div class="MenuSectionCatalog col-4">
              <img src={miniItem.icon}/> {miniItem.name}
            </div>
            ))}
            </>))
          ))}
        </div>
        }
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
