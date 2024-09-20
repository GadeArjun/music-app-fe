import "./App.css";
import Music from "./components/Music";
import MusicSlider from "./components/MusicSlider";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";
import Search from "./components/Search";

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
              <br />
              <MusicSlider
                category="_90's Songs"
                setPlaying={setPlaying}
                playing={playing}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/music/"
          element={
            <>
              <NavigationBar />
              <Music setPlaying={setPlaying} playing={playing} />
              <Footer />
              <br />
              <br />
              <br />
              <br />
              <br />
            </>
          }
        />
        <Route
          path="/search/"
          element={
            <>
              <Search />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
