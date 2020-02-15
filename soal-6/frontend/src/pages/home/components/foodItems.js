import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalEdit from "../../../component/modal-edit";
import ModalSuccess from "../../../component/modal-success";

export default ({ key, val, index, ...props }) => {
  const [modalEditShow, setModalEditShow] = useState(false);
  const [modalSuccessShow, setModalSuccessShow] = useState(false);

  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{val.name}</td>
      <td>{val.product}</td>
      <td>{val.type}</td>
      <td>{val.price}</td>
      <td className="d-flex justify-content-center p-2">
        <Button
          className="mr-4"
          variant="success"
          onClick={() => setModalEditShow(true)}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={() => setModalSuccessShow(true)}>
          Delete
        </Button>
      </td>
      <ModalEdit
        show={modalEditShow}
        handleClose={() => setModalEditShow(false)}
      ></ModalEdit>
      <ModalSuccess
        show={modalSuccessShow}
        handleClose={() => setModalSuccessShow(false)}
      ></ModalSuccess>
    </tr>
  );
};
