import { Button, Col } from "react-bootstrap";

const ItemColor = () => {

  return (
    <Col md="3" lg="2" className="box-shadow py-3">
      <div className="text-center">
        <h3 className="fs-4 text-capitalize"></h3>
        <div className="bg-gray py-3 my-2">
            <div className="color-item"></div>
        </div>
        <Button variant="danger">
          <i className="bi bi-trash fs-5"></i>
        </Button>
      </div>
    </Col>
  );
};

export default ItemColor;
