import React from "react";
import { Client } from "../utils/Clients";
import RatingLogo from "../assets/Rating.png";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <div className="TestimonialGroup">
      <h3>Testimonials</h3>
      <div class="people">
        {Client.map((person) => {
          return (
            <div class="card w-25">
              <div class="card-body">
                <h5 class="card-rating">
                  {Array.from({ length: person.rating }, (_, i) => (
                    <span key={i}>
                      <img src={RatingLogo} width={20} />
                    </span>
                  ))}
                </h5>
                <div class="infoPerson">
                  <img
                    src={person.image}
                    alt="client's photo"
                    width={100}
                    style={{
                      borderRadius: "10px",
                      marginBottom: "12px",
                      marginTop: "12px",
                    }}
                  />
                  <p style={{marginTop:30}}
                  >{person.Comment}</p>
                </div>
                <p>{person.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
