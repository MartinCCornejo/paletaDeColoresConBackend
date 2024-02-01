import { Row } from "react-bootstrap";
import Color from "./Color";

const ContenedorColores = ({arrayColores,borrarColor}) => {

    if (arrayColores.length === 0) {
        return <p className="text-center lead text-secondary fs-2">No hay colores almacenados</p>
    }

  return (
    <section>
    <Row>
        {
            arrayColores.map((elemento,posicion) => <Color borrarColor={borrarColor} key={posicion} color={elemento}></Color>)
        }
    </Row>
    </section>
  );
};

export default ContenedorColores;
