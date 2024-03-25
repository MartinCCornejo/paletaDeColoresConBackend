import { Button, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarColorAPI } from "../helpers/queries";

const ItemColor = ({color}) => {

  const borrarColor = () => {
    Swal.fire({
      title: "Estas seguro de borrar este color?",
      text: "Luego no podras revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarColorAPI(color.id)
        Swal.fire({
          title: "Color eliminado!",
          text: "El color se elimino correctamente.",
          icon: "success",
        });
        // Actualizamos el state arrayTareas
      }
    });
  }

  return (
    <Col md="3" lg="2" className="box-shadow py-3">
      <div className="text-center">
        <h3 className="fs-4 text-capitalize">{color.nombreColor}</h3>
        <div className="bg-gray py-3 my-2">
            <div className="color-item" style={{backgroundColor: `#${color.codigoColor}`}} ></div>
        </div>
        <Button variant="danger" onClick={borrarColor}>
          <i className="bi bi-trash fs-5"></i>
        </Button>
      </div>
    </Col>
  );
};

export default ItemColor;
