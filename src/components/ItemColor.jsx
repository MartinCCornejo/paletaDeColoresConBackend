import { Button, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarColorAPI } from "../helpers/queries";

const ItemColor = ({color}) => {

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
    }).then(async(result) => {
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
