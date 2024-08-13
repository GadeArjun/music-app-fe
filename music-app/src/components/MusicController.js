import "./MusicController.css";
import backButton from "../images/back-button.png";
import nextButton from "../images/next-button.png";
import playButton from "../images/play-button.png";
import pauseButton from "../images/pause-button.png";
import allSongs from "../data";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

function MusicController({ playing, setPlaying }) {
  const category = playing.category.replace(" ", "");
  const currentCategory = allSongs[category];
  const id = playing.id;
  const currentCategoryLength = currentCategory.length;
  const currentMusic = currentCategory[id - 1];
  const location = useLocation();
  const param = queryString.parse(location.search);
  function handlePlayPauseClick() {
    try {
      if (currentMusic.title && playing.play === true) {
        setPlaying({ play: false, id: id, category: category });
      } else {
        setPlaying({
          play: true,
          id: param.id,
          category: param.category.replace(" ", ""),
        });
      }
    } catch (err) {
      setPlaying({
        play: true,
        id: id,
        category: category,
      });
      console.log(err);
    }
  }
  const navigate = useNavigate();
  function handleBackButtonClick() {
    try {
      if (playing.id > 1) {
        navigate(`/music?id=${id - 1}&category=${category}`);
        setPlaying({
          play: true,
          id: id - 1,
          category: category,
        });
      } else {
        navigate(`/music?id=${currentCategoryLength}&category=${category}`);
        setPlaying({
          play: true,
          id: currentCategoryLength,
          category: category,
        });
      }
    } catch (err) {
      if (playing.id > 1) {
        navigate(`/music?id=${id - 1}&category=${category}`);
        setPlaying({
          play: true,
          id: id - 1,
          category: category,
        });
      } else {
        navigate(
          `/music?id=${allSongs["TrendingSongs"].length}&category=${category}`
        );
        setPlaying({
          play: true,
          id: allSongs["TrendingSongs"].length,
          category: category,
        });

        console.log(err);
      }
    }
  }

  function handleNextButtonClick() {
    try {
      if (playing.id < currentCategoryLength) {
        navigate(`/music?id=${+id + 1}&category=${category}`);
        setPlaying({
          play: true,
          id: id + 1,
          category: param.category.replace(" ", ""),
        });
      } else {
        navigate(`/music?id=${1}&category=${category}`);

        setPlaying({
          play: true,
          id: 1,
          category: param.category.replace(" ", ""),
        });
      }
    } catch (err) {
      if (playing.id < allSongs["TrendingSongs"].length) {
        navigate(`/music?id=${+id + 1}&category=${category}`);
        setPlaying({
          play: true,
          id: id + 1,
          category: category,
        });
      } else {
        navigate(`/music?id=${1}&category=${category}`);
        setPlaying({
          play: true,
          id: 1,
          category: category,
        });
        console.log(err);
      }
    }
  }

  return (
    <>
      <div className="current-music-controller">
        <div className="current-music-seek">
          <span>00:00</span> <input type="range" min={0} max={100}></input>
          <span>00:00</span>
        </div>

        <div className="current-music-play">
          <div className="current-music-controls">
            <div className="controls">
              <img
                src={backButton}
                alt=""
                onClick={handleBackButtonClick}
              ></img>
            </div>
            <div onClick={handlePlayPauseClick} className="controls">
              {playing.play ? (
                <img src={pauseButton} alt=""></img>
              ) : (
                <img src={playButton} alt=""></img>
              )}
            </div>
            <div className="controls">
              <img
                src={nextButton}
                alt=""
                onClick={handleNextButtonClick}
              ></img>
            </div>
          </div>
          <div className="current-control-music-title">
            <p>
              {playing.play ? currentMusic.title : "Click On Music To Play"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MusicController;
