import { Form, Button, Row, Col } from "react-bootstrap";

const FormularioColores = () => {
  return ( 
    <Form className="my-5 border border-1 p-3 box-shadow">
      <Form.Group controlId="formularioTarea">
        <Form.Label className="fs-4">Administrar colores</Form.Label>
        <hr></hr>
        <Row className="justify-content-center align-items-center">
          <Col md="3">
            <div className="box"></div>
          </Col>
          <Col md="7">
            <Form.Control type="text" placeholder="Ingrese un color ej Blue" />
          </Col>
        </Row>
        <hr></hr>
        <div className="text-end">
          <Button variant="primary" type="submit">
            Agregar
          </Button>{" "}
        </div>
      </Form.Group>
    </Form>
  );
};

export default FormularioColores;
