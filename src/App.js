import './App.css';
import travel_01 from "./assets/travel_01.jpg";
// import travel_02 from "./assets/travel_02.jpg";
// import travel_03 from "./assets/travel_03.jpg";
import Hero from "./components/Hero";


function App() {
  return (
    <div className="App">
      <Hero imagesrc={travel_01}/>
    </div>
  );
}

export default App;
