import "./App.css";
import Music from "./components/Music";
import MusicSlider from "./components/MusicSlider";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MusicController from "./components/MusicController";
// import { createContext, useEffect, useState } from "react";
import { useState } from "react";
// import axios from "axios";

function App() {
  const [playing, setPlaying] = useState({
    play: false,
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavigationBar />
              <MusicSlider
                category="Trending Songs"
                setPlaying={setPlaying}
                playing={playing}
              />
              <br />
              <MusicSlider
                category="New Songs"
                setPlaying={setPlaying}
                playing={playing}
              />
              <br />
              <MusicSlider
                category="Hindi Songs"
                setPlaying={setPlaying}
                playing={playing}
              />
              <br />
              <MusicSlider
                category="Marathi Songs"
                setPlaying={setPlaying}
                playing={playing}
              />
              <br />
              {/* <MusicSlider
                category="English Songs"
                setPlaying={setPlaying}
                playing={playing}
              /> */}
              <br />
              <MusicSlider
                category="_90s Songs"
                setPlaying={setPlaying}
                playing={playing}
              />
              {/* <MusicController setPlaying={setPlaying} playing={playing} /> */}
              <br />
              <br />
              <br />
              <hr />
            </>
          }
        />
        <Route
          path="/music/"
          element={
            <>
              <NavigationBar />
              <Music setPlaying={setPlaying} playing={playing} />
            </>
          }
        />
        <Route
          path="/search/:musicName"
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
