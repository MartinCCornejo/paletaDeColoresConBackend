import { Row } from "react-bootstrap";
import ItemColor from "./ItemColor";

const ContenedorColores = ({colores}) => {


  // if (arrayColores.length === 0) {
  //     return <p className="text-center lead text-secondary fs-2">No hay colores almacenados</p>
  // }

  return (
    <section>
      <Row className="gap-5 justify-content-center align-item-center">
        {
          colores.map((color) => <ItemColor key={color.id} color={color}></ItemColor>)
        }
      </Row>
    </section>
  );
};

export default ContenedorColores;
