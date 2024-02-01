import { Form, Button, Row, Col } from "react-bootstrap";

const FormularioColores = () => {
  return ( 
    <Form className="my-5 border p-3 box-shadow">
      <Form.Group controlId="formularioTarea">
        <Form.Label className="fs-4">Administrar colores</Form.Label>
        <Row className="justify-content-center align-items-center bg-gray py-4">
          <Col md="3">
            <div className="box"></div>
          </Col>
          <Col md="7">
            <Form.Control type="text" placeholder="Ingrese un color ej Blue" />
          </Col>
        </Row>
        <div className="text-end">
          <Button variant="primary" type="submit" className="mt-3">
            Agregar
          </Button>{" "}
        </div>
      </Form.Group>
    </Form>
  );
};

export default FormularioColores;
