import './App.css';
import MainCard from "./MainCard";

function App() {
  return (
  <div className="App">
    <MainCard />
    <p className="footer" >
      <a href="https://github.com/IrinaGC/weather-react-app.git" rel="noreferrer" target="_blank">
        Open - source code </a>
      by Irina G.C. at <a href="https://www.shecodes.io/" rel="noreferrer" target="_blank">
        SheCodes </a>
    </p >
  </div>
  );
}

export default App;