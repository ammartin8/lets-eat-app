import React from "react";

// React Boostrap Components
import { Form, Row } from "react-bootstrap";

const Sidebar = () => {
  return (
    <>
      <Row>
        <p className="filterLabel mx-1 px-auto">
          <strong>Popular Cuisines</strong>
        </p>
        <Form.Group
          controlId="formBasicCheckbox"
          className="px-4 filter-checkboxes"
        >
          <Form.Check type="checkbox" label="American Food" />
          <Form.Check type="checkbox" label="Asian Food" />
          <Form.Check type="checkbox" label="Chinese Food" />
          <Form.Check type="checkbox" label="Italian Food" />
          <Form.Check type="checkbox" label="Japanese Food" />
          <Form.Check type="checkbox" label="Mexican Food" />
          <Form.Check type="checkbox" label="Thai Food" />
          <Form.Check type="checkbox" label="Burger Food" />
          <Form.Check type="checkbox" label="Bar Food" />
          <Form.Check type="checkbox" label="BBQ Food" />
        </Form.Group>
      </Row>
      <Row>
        <p className="filterLabel mx-1 px-auto">
          <strong>Restaurant Establishment</strong>
        </p>
        <Form.Group
          controlId="formBasicCheckbox"
          className="px-4 filter-checkboxes"
        >
          <Form.Check type="checkbox" label="Casual Dining" />
          <Form.Check type="checkbox" label="Cafe" />
          <Form.Check type="checkbox" label="Quick Bites" />
          <Form.Check type="checkbox" label="Bakeries" />
          <Form.Check type="checkbox" label="Fast Food" />
          <Form.Check type="checkbox" label="Bars" />
          <Form.Check type="checkbox" label="Pizzerias" />
          <Form.Check type="checkbox" label="Coffee Shop" />
          <Form.Check type="checkbox" label="Deli" />
          <Form.Check type="checkbox" label="Dessert Shop" />
        </Form.Group>
      </Row>
    </>
  );
};
export default Sidebar;
