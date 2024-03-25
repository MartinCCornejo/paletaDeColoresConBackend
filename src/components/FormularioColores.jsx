import { Form, Button, Row, Col } from "react-bootstrap";
import { useState,useEffect } from "react";
import Swal from "sweetalert2";
import ContenedorColores from "./ContenedorColores";
import { useForm } from "react-hook-form";

const FormularioColores = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();
  // const [color, setColor] = useState("");
  // const coloresLocalStorage = JSON.parse(localStorage.getItem('coloresLocal')) || [];
  // const [arrayColores, setArrayColores] = useState(coloresLocalStorage);

  // useEffect(()=>{
  //   localStorage.setItem('coloresLocal',JSON.stringify(arrayColores));
  // },[arrayColores,color])


// Funcion para verificar que el color sea valido 
  // const esColorValido = (colorInput) => {
  //   // Lista de nombres de colores en inglés
  //   const coloresValidos = [
  //     "black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia",
  //     "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua",
  //     "orange", "aliceblue", "antiquewhite", "aquamarine", "azure", "beige",
  //     "bisque", "blanchedalmond", "blueviolet", "brown", "burlywood", "cadetblue", "cyan", "lightblue"
  //   ];
  
  //   // Verifica si el color ingresado está en la lista de colores válidos
  //   const esValido = coloresValidos.includes(colorInput.toLowerCase());
  
  //   if (!esValido) {
  //     Swal.fire({
  //       title: "Error",
  //       text: "Por favor, ingrese un nombre de color válido en español.",
  //       icon: "error",
  //     });
  //   }
  
  //   return esValido;
  // };
  
// // Funcion que verifica si un color es repetido 
//   const esColorRepetido = (inputColor) => {
//     for (let i = 0; i < arrayColores.length; i++) {
//        if (arrayColores.includes(color)) {
//         return true
//        }

//        return false
//     }
//   }
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!esColorValido(color)) {
  //       Swal.fire({
  //         title: "Error",
  //         text: "Por favor, ingrese un color válido.",
  //         icon: "error",
  //       });
  //       return;
  //   } if (esColorRepetido(color)) {
  //       Swal.fire({
  //           title: "Error",
  //           text: "Ya ingresaste este color!",
  //           icon: "error",
  //         });
  //         return;
  //   }


  //   Swal.fire({
  //     title: "Bien hecho!",
  //     text: "El color se agrego correctamente",
  //     icon: "success",
  //   });

  // };

  const borrarColor = () => {

    // Swal.fire({
    //   title: "Estas seguro de borrar este color?",
    //   text: "Luego no podras revertir esta acción!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Si, borrar",
    //   cancelButtonText: "Cancelar",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire({
    //       title: "Color eliminado!",
    //       text: "El color se elimino correctamente.",
    //       icon: "success",
    //     });
    //     // Actualizamos el state arrayTareas
    //   }
    // });
  };



  return (
    <section>
      <Form className="my-5 border p-3 box-shadow" >
        <Form.Group controlId="formularioColor">
          <Form.Label className="fs-4">Administrar colores</Form.Label>
          <Row className="justify-content-center align-items-center bg-gray py-4 gap-3">
            <Col md="3">
              <div className="box border border-5"></div>
            </Col>
            <Col md="7">
              <div className="mb-3">
              <Form.Label>Ingrese el nombre del color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Rojo"
              />
              </div>
              <div>
              <Form.Label>Ingrese el código del color (en hexadecimal)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: FF0000"
              />
              </div>
            </Col>
          </Row>
          <div className="text-end">
            <Button variant="primary" type="submit" className="mt-3">
              Agregar
            </Button>{" "}
          </div>
        </Form.Group>
      </Form>
      <ContenedorColores></ContenedorColores>
    </section>
  );
};

export default FormularioColores;
