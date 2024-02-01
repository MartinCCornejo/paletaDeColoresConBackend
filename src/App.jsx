import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import FormularioColores from "./components/FormularioColores";
import ContenedorColores from "./components/ContenedorColores";

function App() {
  return (
    <>
      <header className="bg-danger text-center text-light  py-3">
        <h1 className="display-5">
          TP React <br></br> Ejercicio 6 - Paleta de colores
        </h1>
      </header>
      <Container className="flex-grow-1">
        <FormularioColores></FormularioColores>
        <ContenedorColores></ContenedorColores>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
