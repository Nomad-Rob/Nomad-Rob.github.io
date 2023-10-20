import Navbar from "./componets/NavBar/navbar";  
import Welcome from "./componets/Welcome/welcome";
import About from "./componets/About/about";
import Portfolio from "./componets/Portfolio/portfolio";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
