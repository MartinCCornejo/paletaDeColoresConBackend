import { Button, Col,Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarColorAPI } from "../helpers/queries";
import { useState } from "react";

const ItemColor = ({ color }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const borrarColor = () => {
    Swal.fire({
      title: `Estas seguro de borrar el color '${color.nombreColor}'?`,
      text: "Luego no podras revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarColorAPI(color.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Color eliminado!",
            text: `El color '${color.nombreColor}' se elimino correctamente.`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: `El color '${color.nombreColor}' no se pudo eliminar. Intente de nuevo en unos minutos.`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <Col md="3" lg="2" className="box-shadow py-3">
      <div className="text-center">
        <h3 className="fs-4 text-capitalize">{color.nombreColor}</h3>
        <div className="bg-gray py-3 my-2">
          <div
            className="color-item"
            style={{ backgroundColor: `#${color.codigoColor}` }}
          ></div>
        </div>
        <Button variant="warning" onClick={handleShow}>
          <i className="bi bi-pencil-square" ></i>
        </Button>
        <Button variant="danger" onClick={borrarColor}>
          <i className="bi bi-trash fs-5"></i>
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};

export default ItemColor;
