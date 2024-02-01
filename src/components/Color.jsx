import { Button, Col } from "react-bootstrap";

const Color = () => {
  return (
    <Col md="4" lg="3" className="box-shadow py-3">
      <div className="text-center">
        <h3 className="fs-4">Nombre del color</h3>
        <div className="bg-gray py-3 my-2">
            <div className="color"></div>
        </div>
        <Button variant="danger">
          <i className="bi bi-trash fs-5"></i>
        </Button>
      </div>
    </Col>
  );
};

export default Color;
