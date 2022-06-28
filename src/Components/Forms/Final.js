import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {
  const {
    firstName,
    lastName,
    age,
    email,
    phoneno,
    address,
    statecity,
    postalcode,
    cardnumber,
    cvv,
    expiredate
  } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>First Name :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
          <p>
            <strong>Mobile No. :</strong> {phoneno}{" "}
          </p>
          <p>
            <strong>Address:</strong> {address}{" "}
          </p>
          <p>
            <strong>State/City :</strong> {statecity}{" "}
          </p>
          <p>
            <strong>Postal Code :</strong> {postalcode}{" "}
          </p>
          <p>
            <strong>Card Number :</strong> {cardnumber}{" "}
          </p>
          <p>
            <strong>CVV :</strong> {cvv}{" "}
          </p>
          <p>
            <strong>Expire Date :</strong> {expiredate}{" "}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;
