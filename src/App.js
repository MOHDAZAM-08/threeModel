import "./App.css";
import Experience from "./components/Experience";
import Home from "./components/Home";
import TwoBox from "./components/TwoBox";
import ThreeBox from "./components/ThreeBox";
import FourBox from "./components/FourBox";

function App() {
  return (
    <>
      <div className="exp">
        <Experience />
      </div>
      <div className="content">
        <Home />
        <TwoBox />
        <ThreeBox />
        <FourBox />
      </div>
    </>
  );
}

export default App;
