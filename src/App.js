import "./App.css";
import Experience from "./components/Experience";
import Home from "./components/Home";
import TwoBox from "./components/TwoBox";
import ThreeBox from "./components/ThreeBox";
import FourBox from "./components/FourBox";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <div className="exp">
          <Experience />
        </div>
        <Home />
        <TwoBox />
        <div style={{
          height: "30vh"
        }} />
        <ThreeBox />
        <FourBox />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
