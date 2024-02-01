import { Form, Button, Row, Col } from "react-bootstrap";
import { useState,useEffect } from "react";
import Swal from "sweetalert2";
import ContenedorColores from "./ContenedorColores";

const FormularioColores = () => {
  const [color, setColor] = useState("");
  const coloresLocalStorage = JSON.parse(localStorage.getItem('coloresLocal')) || [];
  const [arrayColores, setArrayColores] = useState(coloresLocalStorage);

  useEffect(()=>{
    localStorage.setItem('coloresLocal',JSON.stringify(arrayColores));
  },[arrayColores,color])

  const isValidColor = (inputColor) => {
    // Expresión regular para verificar el formato del color
    const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^[a-zA-Z]+$/;
    return colorRegex.test(inputColor);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidColor(color)) {
        Swal.fire({
          title: "Error",
          text: "Por favor, ingrese un color válido.",
          icon: "error",
        });
        return;
      }

    setArrayColores([...arrayColores, color]);

    Swal.fire({
      title: "Bien hecho!",
      text: "El color se agrego correctamente",
      icon: "success",
    });

    setColor("");
  };

  const borrarColor = (nombreDelColor) => {
    // Borramos la tarea con el metodo filter
    const nuevoArrayColores = arrayColores.filter(
      (elemento) => elemento !== nombreDelColor
    );

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
        Swal.fire({
          title: "Color eliminado!",
          text: "El color se elimino correctamente.",
          icon: "success",
        });
        // Actualizamos el state arrayTareas
        setArrayColores(nuevoArrayColores);
      }
    });
  };



  return (
    <section>
      <Form className="my-5 border p-3 box-shadow" onSubmit={handleSubmit}>
        <Form.Group controlId="formularioColor">
          <Form.Label className="fs-4">Administrar colores</Form.Label>
          <Row className="justify-content-center align-items-center bg-gray py-4 gap-3">
            <Col md="3">
              <div className="box border border-5" style={{backgroundColor: color}}></div>
            </Col>
            <Col md="7">
              <Form.Control
                type="text"
                placeholder="Ingrese un color ej Blue"
                onChange={(e) => setColor(e.target.value)}
                value={color}
              />
            </Col>
          </Row>
          <div className="text-end">
            <Button variant="primary" type="submit" className="mt-3" disabled={color.length < 3}>
              Agregar
            </Button>{" "}
          </div>
        </Form.Group>
      </Form>
      <ContenedorColores arrayColores={arrayColores} borrarColor={borrarColor}></ContenedorColores>
    </section>
  );
};

export default FormularioColores;
