import { Row } from "react-bootstrap";
import Color from "./Color";

const ContenedorColores = () => {

    // if (arrayColores.length === 0) {
    //     return <p className="text-center lead text-secondary fs-2">No hay colores almacenados</p>
    // }

  return (
    <section>
    <Row className="gap-5 justify-content-center align-item-center">
        {
            // arrayColores.map((elemento,posicion) => <Color></Color>)
        }
    </Row>
    </section>
  );
};

export default ContenedorColores;
