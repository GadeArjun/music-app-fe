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
              <MusicSlider category="_90s Songs" />
              <br />
              <br />
              <br />
              <hr/>
            </>
          }
        />
        <Route
          path="/music"
          element={
            <>
              <NavigationBar />
              <Music />
              <br />
              <br />
              <MusicSlider category="Trending Songs" />
              <br />
              <br />
              <br />
              <hr/>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
