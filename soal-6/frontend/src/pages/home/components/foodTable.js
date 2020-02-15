import React, { useState } from "react";

import { Table, Container, Button } from "react-bootstrap";
import ModalAdd from "../../../component/modal-add";
import FoodItems from "./foodItems";

export default ({ data, ...props }) => {
  const [show, setShow] = useState(false);
  return (
    <Container className="mt-4  ">
      <Button variant="success" onClick={() => setShow(true)} className="mb-2">
        ADD
      </Button>
      <ModalAdd
        show={show}
        refetch={props.refetch}
        handleClose={() => setShow(false)}
      ></ModalAdd>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Cashier</th>
            <th>Product</th>
            <th>Categories</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.data &&
            data.data.map((val, key) => (
              <FoodItems val={val} key={key} index={key}></FoodItems>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};
