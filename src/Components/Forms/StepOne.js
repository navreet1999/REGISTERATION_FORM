import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

const StepOne = ({ nextStep, handleFormData, values }) => {
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                defaultValue={values.firstName}
                type="text"
                placeholder="First Name"
                onChange={handleFormData("firstName")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                defaultValue={values.lastName}
                type="text"
                placeholder="Last Name"
                onChange={handleFormData("lastName")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={handleFormData("email")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Mobile Number"
                onChange={handleFormData("phoneno")}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              NEXT
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;
