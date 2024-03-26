import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import FormularioColores from "./components/FormularioColores";

function App() {
  return (
    <>
      <header className="bg-danger text-center text-light  py-3">
        <h1 className="display-5">
          Paleta de colores
        </h1>
      </header>
      <Container className="flex-grow-1">
        <FormularioColores></FormularioColores>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
