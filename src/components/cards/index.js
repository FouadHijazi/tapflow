import "./style.css";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addinformations } from "../../redux/reducers/profileInfo";

const Cards = () => {
  const dispatch = useDispatch();

  const infoState = useSelector((state) => {
    return {
      informations: state.informations.informations,
    };
  });
  console.log(infoState.informations);

  useEffect(() => {
    localStorage.setItem("cardData", JSON.stringify(infoState.informations));
  }, [infoState.informations]);

  
  return (
    <div>
      <h2 className="the_info">You'r informations</h2>
      <div className="MyProfile_Div">
        <Card>
          <Card.Body>{infoState.informations.name}</Card.Body>
        </Card>
        <Card style={{ marginTop: "2vh" }}>
          <Card.Body>
            <img src={infoState.informations.image.link} />
          </Card.Body>
        </Card>
        <Card style={{ marginTop: "2vh" }}>
          <Card.Body>{infoState.informations.location.country}</Card.Body>
        </Card>
        <Card style={{ marginTop: "2vh" }}>
          <Card.Body>
            {infoState.informations.location.cities.map((ele) => (
              <h6> {ele}</h6>
            ))}
          </Card.Body>
        </Card>
        <Card style={{ marginTop: "2vh" }}>
          <Card.Body>{infoState.informations.link}</Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
