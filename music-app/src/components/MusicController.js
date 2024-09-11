import "./MusicController.css";
import React, { useEffect, useState } from "react";
import backButton from "../images/back-button.png";
import nextButton from "../images/next-button.png";
import playButton from "../images/play-button.png";
import pauseButton from "../images/pause-button.png";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

function MusicController({ playing, setPlaying }) {
  const navigate = useNavigate();
  const location = useLocation();
  const param = queryString.parse(location.search);

  const category = param.category;
  var id = +param.id;

  const [autoplay, setAutoplay] = useState(false);
  const [currentMusic, setCurrentMusic] = useState({
    title: "Music Title loading....",
    musicId: "",
    durration: "00:00",
  });

  useEffect(() => {
    async function getData(category, id) {
      try {
        setAutoplay(true);
        const res = await axios.get(
          `https://legendary-space-succotash-5gxg5574qx4cp6g7-8080.app.github.dev/${category}/${id}/`
        );
        if (res.data[0]) {
          setCurrentMusic(res.data[0]);
        } else {
          id = 1;
          navigate(`/music?category=${category}&id=${id}`);
        }
      } catch (err) {
        console.log({ err });
      }
    }
    getData(category, id);
  }, [category, id, navigate]);

  // console.log("music = ", currentMusic.musicYouTubeId , autoplay);

  // function for play pause music
  function handlePlayPauseClick() {
    if (autoplay) {
      setAutoplay(false);
    } else {
      setAutoplay(true);
    }
  }
  // function to haddle next click

  function handleNextButtonClick(id) {
    try {
      setAutoplay(true);
      id += 1;
      navigate(`/music?category=${category}&id=${id}`);
    } catch (err) {
      console.log(err);
    }
  }

  // function to haddle back click
  function handleBackButtonClick(id) {
    try {
      setAutoplay(true);
      if (id > 1) {
        id -= 1;
        navigate(`/music?category=${category}&id=${id}`);
      } else {
        id = 1;
        navigate(`/music?category=${category}&id=${id}`);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <iframe
        width="0px"
        height="0px"
        src={`https://www.youtube.com/embed/${currentMusic.musicYouTubeId}?autoplay=${autoplay}&vq=large&controls=1&mute=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
      <div className="current-music-controller">
        {/* <div className="current-music-seek">
          <span>{seekPossition}</span>{" "}
          <input
            value={seekValue}
            type="range"
            min={0}
            onChange={""}
            max={100}
          ></input>
          <span>{currentMusic.durration}</span>
        </div> */}

        <div className="current-music-play">
          <div className="current-music-controls">
            <div className="controls">
              <img
                src={backButton}
                alt="Back"
                onClick={() => handleBackButtonClick(id)}
              ></img>
            </div>
            <div onClick={handlePlayPauseClick} className="controls">
              {autoplay ? (
                <img src={pauseButton} alt=""></img>
              ) : (
                <img src={playButton} alt=""></img>
              )}
            </div>
            <div className="controls">
              <img
                src={nextButton}
                alt="Next"
                onClick={() => handleNextButtonClick(id)}
              ></img>
            </div>
          </div>
          <div className="current-control-music-title">
            <p>{autoplay ? currentMusic.title : "Click On Music To Play"}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MusicController;
