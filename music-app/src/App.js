import "./App.css";
import Music from "./components/Music";
import MusicSlider from "./components/MusicSlider";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MusicController from "./components/MusicController";
import { useState } from "react";

function App() {
  const [playing, setPlaying] = useState({
    play: false,
    id: 1,
    category: "Trending Songs",
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavigationBar />
              <MusicSlider category="Trending Songs" setPlaying={setPlaying} />
              <br />
              <MusicSlider category="New Songs" setPlaying={setPlaying} />
              <br />
              <MusicSlider category="Hindi Songs" setPlaying={setPlaying} />
              <br />
              <MusicSlider category="Marathi Songs" setPlaying={setPlaying} />
              <br />
              <MusicSlider category="English Songs" setPlaying={setPlaying} />
              <br />
              <MusicSlider category="_90s Songs" setPlaying={setPlaying} />
              <MusicController setPlaying={setPlaying} playing={playing} />
              <br />
              <br />
              <br />
              <hr />
            </>
          }
        />
        <Route
          path="/music"
          element={
            <>
              <NavigationBar />
              <Music setPlaying={setPlaying} playing={playing} />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              <NavigationBar />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
