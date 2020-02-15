import React from "react";

import { Modal, Button, Form, Image } from "react-bootstrap";
import berhasil from "../assets/img/berhasil.png";

export default ({ show, handleClose, ...props }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <div className="d-flex flex-column align-items-center">
          <span>
            {props.product.cashier.name} ID
            <span style={{ fontColor: "orange" }}>
              #{props.product.cashier.id}
            </span>
          </span>
          <Image style={{ width: 300 }} src={berhasil}></Image>
          <span>BERHASIL DIHAPUS</span>
        </div>
      </Modal.Body>
    </Modal>
  );
};
