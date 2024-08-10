import "./App.css";
import Music from "./components/Music";
import MusicSlider from "./components/MusicSlider";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavigationBar />
              <MusicSlider category="Trending Songs" />
              <br />
              <MusicSlider category="New Songs" />
              <br />
              <MusicSlider category="Hindi Songs" />
              <br />
              <MusicSlider category="Marathi Songs" />
              <br />
              <MusicSlider category="English Songs" />
              <br />
              <MusicSlider category="90s Songs" />
            </>
          }
        />
        <Route
          path="/music"
          element={
            <>
              <NavigationBar />
              <Music />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
