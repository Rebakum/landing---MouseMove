import "./App.css";
import Home1 from "./Components/Home/Home1";
import MouseMove1 from "./Components/MouseMove1/MouseMove1";
import Navber from "./Components/Sheard/Navber/Navber";

function App() {
  return (
    <>
      <div>
        <Navber />
        <MouseMove1 />
        <div className="container mx-auto  mt-20  overflow-hidden">
          <Home1 />
        </div>
      </div>
    </>
  );
}

export default App;
