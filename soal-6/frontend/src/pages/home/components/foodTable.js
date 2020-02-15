import React from "react";

import { Table, Container, Button } from "react-bootstrap";
import ModalAdd from "../../../component/modal-add";
import FoodItems from "./foodItems";

const data = [
  {
    name: "Pevita Pierce",
    product: "Latte",
    type: "Drink",
    price: 100000
  },
  {
    name: "Pevita Pierce",
    product: "Latte",
    type: "Drink",
    price: 100000
  },
  {
    name: "Pevita Pierce",
    product: "Latte",
    type: "Drink",
    price: 100000
  },
  {
    name: "Pevita Pierce",
    product: "Latte",
    type: "Drink",
    price: 100000
  }
];

export default () => {
  return (
    <Container className="mt-4  ">
      <Button variant="success" className="mb-2">
        ADD
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Cashier</th>
            <th>Product</th>
            <th>Categor</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => (
            <FoodItems val={val} key={key} index={key}></FoodItems>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
