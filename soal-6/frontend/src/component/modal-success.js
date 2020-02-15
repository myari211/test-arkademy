import React from "react";

import { Modal, Button, Form, Image } from "react-bootstrap";
import berhasil from "../assets/img/berhasil.png";

export default ({ show, handleClose, ...props }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <div className="d-flex flex-column align-items-center">
          <span>
            DATA RAISA ANDRIANI ID{" "}
            <span style={{ fontColor: "orange" }}>#1</span>
          </span>
          <Image style={{ width: 300 }} src={berhasil}></Image>
          <span>BERHASIL DIHAPUS</span>
        </div>
      </Modal.Body>
    </Modal>
  );
};
