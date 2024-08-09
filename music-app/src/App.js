import "./App.css";
import MusicSlider from "./components/MusicSlider";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <MusicSlider category = "Trending Songs" />
      <br />
      <MusicSlider category = "Trending Songs"  />
    </>
  );
}

export default App;
