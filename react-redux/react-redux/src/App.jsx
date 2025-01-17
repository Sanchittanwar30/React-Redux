import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCount from "./components/DisplayCount";
import Container from "./components/Container";
import Controls from "./components/Controls";

function App() {
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header />
        <div className="col-lg-6 mx-auto">
          <DisplayCount />
          <Controls />
        </div>
      </Container>
    </center>
  );
}

export default App;
