import "./App.css";
import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import NavComp from "./components/NavComp";
import CardComp from "./components/CardComp";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <NavComp />
      <CardComp />
      <Button
        as="a"
        variant="primary"
        onClick={() => {
          alert("Click!");
        }}
      >
        Button as link
      </Button>
    </div>
  );
}

export default App;
