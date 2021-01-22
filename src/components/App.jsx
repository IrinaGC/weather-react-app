import './App.css';
import Form from "./Form";
import ControlledTabs from "./ControlledTabs";

function App() {
  return (
  <div className="App">
    <div className ="container">
      <div className = "card">
        <div className = "card-body CardBody">
          <Form defaultCity="London" />
          <ControlledTabs />
        </div>
      </div>
    <p className="footer" >
      <a href="https://github.com/IrinaGC/weather-react-app.git" rel="noreferrer" target="_blank">
        Open - source code </a>
      by Irina G.C. at <a href="https://www.shecodes.io/" rel="noreferrer" target="_blank">
        SheCodes </a>
    </p >
    </div>
  </div>
  );
}

export default App;