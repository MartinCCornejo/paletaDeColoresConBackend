import { Button, Col, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  borrarColorAPI,
  editarColorAPI,
  obtenerColorAPI,
} from "../helpers/queries";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ItemColor = ({ color }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    cargarDatosColor(); // Cargar los datos del color al abrir el modal de edición
    setShow(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {}, [color]);

  const onSubmit = async (formData) => {
    const respuesta = await editarColorAPI(formData, color.id);
    if (respuesta.status === 200) {
      Swal.fire({
        title: "Color editado",
        text: `El color se editó correctamente.`,
        icon: "success",
      });
      handleClose();
    } else {
      Swal.fire({
        title: "Error!",
        text: `El color no se pudo editar correctamente. Intentelo de nuevo en unos minutos`,
        icon: "error",
      });
    }
  };

  async function cargarDatosColor() {
    const respuesta = await obtenerColorAPI(color.id);
    if (respuesta.status === 200) {
      const colorBuscado = await respuesta.json();
      setValue("nombreColor", colorBuscado.nombreColor);
      setValue("codigoColor", colorBuscado.codigoColor);
    }
  }

  const borrarColor = async () => {
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
          handleClose();
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
        <div className="d-flex justify-content-center gap-2">
          <Button variant="warning" onClick={handleShow}>
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button variant="danger" onClick={borrarColor}>
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Color</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mx-2 my-0">
          <Form className="border p-3" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formularioColor">
              <div className="py-2">
                <div className="mb-3">
                  <Form.Label>Nombre del color</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Rojo"
                    {...register("nombreColor", {
                      required: "Este campo es obligatorio",
                      minLength: {
                        value: 3,
                        message: "Debe ingresar como mínimo 3 caracteres",
                      },
                      maxLength: {
                        value: 20,
                        message: "Debe ingresar como máximo 20 caracteres",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.nombreColor?.message}
                  </Form.Text>
                </div>
                <div>
                  <Form.Label>Código del color (en hexadecimal)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: FF0000"
                    {...register("codigoColor", {
                      required: "Este campo es obligatorio",
                      minLength: {
                        value: 3,
                        message: "Debe ingresar como mínimo 3 caracteres",
                      },
                      maxLength: {
                        value: 6,
                        message: "Debe ingresar como máximo 6 caracteres",
                      },
                      pattern: {
                        value:/^([0-9A-Fa-f]{3}){1,2}$/i,
                        message: "Debe ingresar un código de color hexadecimal válido",
                      }
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.codigoColor?.message}
                  </Form.Text>
                </div>
              </div>
              <div className="d-flex gap-2 justify-content-end">
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button variant="primary" type="submit">
                  Guardar cambios
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </Col>
  );
};

export default ItemColor;
