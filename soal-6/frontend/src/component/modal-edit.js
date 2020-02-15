import React, { useState } from "react";

import { Modal, Button, Form } from "react-bootstrap";
import Axios from "axios";

function useEditProducts() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({});

  async function editProducts(id) {
    try {
      const res = await Axios({
        method: "PATCH",
        url: "http://localhost:3030/products/" + id,
        data: input
      });
      setData(res);
    } catch (err) {
      setData(err);
    }
  }

  return [data, editProducts, input, setInput];
}

export default ({ show, handleClose, ...props }) => {
  const [data, editProducts, value, setValue] = useEditProducts();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>ADD</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Cashier</Form.Label>
          {/*<Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control> */}
          <Form.Control
            type="text"
            placeholder="Product.."
            onChange={e =>
              setValue({
                ...value,
                cashierId: e.target.value
              })
            }
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Category</Form.Label>
          {/* <Form.Control as="select">
          <option  >1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control> */}
          <Form.Control
            type="text"
            placeholder="Product.."
            onChange={e =>
              setValue({
                ...value,
                categoryId: e.target.value
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product.."
            onChange={e =>
              setValue({
                ...value,
                name: e.target.value
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price"
            onChange={e =>
              setValue({
                ...value,
                price: e.target.value
              })
            }
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={async () => {
            await editProducts(props.product.id);
            await props.refetch();
            handleClose();
          }}
        >
          ADD
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
