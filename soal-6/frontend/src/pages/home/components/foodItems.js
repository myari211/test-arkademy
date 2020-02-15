import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalEdit from "../../../component/modal-edit";
import ModalSuccess from "../../../component/modal-success";
import Axios from "axios";

function useDelete() {
  const [data, setData] = useState([]);

  async function deleteProduct(id) {
    try {
      const res = await Axios({
        method: "DELETE",
        url: "http://localhost:3030/products/" + id
      });
      setData(res);
    } catch (err) {
      console.log(err);
      setData(err);
    }
  }

  return [data, deleteProduct];
}

export default ({ key, val, index, ...props }) => {
  const [modalEditShow, setModalEditShow] = useState(false);
  const [modalSuccessShow, setModalSuccessShow] = useState(false);
  const [data, deleteProduct] = useDelete();

  return (
    <tr key={val.id + Date.now()}>
      <td>{index + 1}</td>
      <td>{val.cashier.name}</td>
      <td>{val.name}</td>
      <td>{val.category.name}</td>
      <td>{val.price}</td>
      <td className="d-flex justify-content-center p-2">
        <Button
          className="mr-4"
          variant="success"
          onClick={() => setModalEditShow(true)}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={async () => {
            await deleteProduct(val.id);
            await props.refetch();
            setModalSuccessShow(true);
          }}
        >
          Delete
        </Button>
      </td>
      <ModalEdit
        show={modalEditShow}
        handleClose={() => setModalEditShow(false)}
        product={val}
        refetch={props.refetch}
      ></ModalEdit>
      <ModalSuccess
        show={modalSuccessShow}
        handleClose={() => setModalSuccessShow(false)}
        product={val}
      ></ModalSuccess>
    </tr>
  );
};
