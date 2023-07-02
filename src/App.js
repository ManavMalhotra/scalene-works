import "./App.css";
import GridContainer from "./components/GridContainer";
import hero from "./assets/images/hero.png"
function App() {
  return (
    <div className="App">
      <GridContainer>
        <div className="col-span-1"></div>

        <div className="col-span-12 bg-hero-image bg-cover bg-center">
        <img src={hero} alt="Hero Background" className="w-full h-full object-cover" />
        </div>

        <div className="col-span-1"></div>
      </GridContainer>
    </div>
  );
}

export default App;
