import './App.css';
import Form from "./Form";


function App() {
  return (
  <div className="App">
    <div className ="container">
      <div className = "card">
        <div className = "card-body CardBody">
          <Form defaultCity="London" />
        </div>
      </div>
    <p className="footer" >
       React project coded by <a href="https://www.linkedin.com/in/irinacirlan/" rel="noreferrer" target="_blank">Irina Cirlan</a>, open-sourced on <a href="https://github.com/IrinaGC/weather-react-app.git" rel="noreferrer" target="_blank">
        GitHub</a>,
        hosted on <a href="https://epic-wright-87a1e6.netlify.app/" rel="noreferrer" target="_blank"> Netlify </a> 
    </p>
    </div>
  </div>
  );
}

export default App;