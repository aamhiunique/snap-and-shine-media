import "./App.css";
import Imgcarousel from "./components/imgCarousel/Imgcarousel";
import Navbar from "./components/navigation/Navbar";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Navbar />
      <Imgcarousel />
      <Services />
    </>
  );
}

export default App;
