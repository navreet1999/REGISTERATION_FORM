import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  const submitFormData = (e) => {
    nextStep();
  };

  const [status, setStatus] = React.useState(0);

  const radioHandler = (status) => {
    setStatus(status);
  };

  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <label className="mb-3">1</label>
            <input
              type="radio"
              value="1"
              name="release"
              checked={status === 1}
              onClick={(e) => radioHandler(1)}
            />
            <label>2</label>
            <input
              type="radio"
              name="release"
              checked={status === 2}
              onClick={(e) => radioHandler(2)}
            />

            {status === 1 && (
              <div>
                <Form.Group className="mb-3">
                  <Form.Label>ADDRESS</Form.Label>
                  <Form.Control
                    name="address"
                    type="text"
                    placeholder="ADDRESS"
                    onChange={handleFormData("address")}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>STATE/CITY</Form.Label>
                  <Form.Control
                    name="statecity"
                    type="text"
                    placeholder="State/City"
                    onChange={handleFormData("statecity")}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                    name="postalcode"
                    type="text"
                    placeholder="Postal Code"
                    onChange={handleFormData("postalcode")}
                  />
                </Form.Group>
              </div>
            )}

            {status === 2 && (
              <div>
                <Form.Group className="mb-3">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    name="cardnumber"
                    type="text"
                    placeholder="ADDRESS"
                    onChange={handleFormData("cardnumber")}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    name="cvv"
                    type="text"
                    placeholder="CVV"
                    onChange={handleFormData("cvv")}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>EXPIRE DATE</Form.Label>
                  <Form.Control
                    name="expiredate"
                    type="date"
                    placeholder="Expire Date"
                    onChange={handleFormData("expiredate")}
                  />
                </Form.Group>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;
