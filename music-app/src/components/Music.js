import "./Music.css";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import MusicSlider from "./MusicSlider";
import MusicController from "./MusicController";
import axios from "axios";
import { useEffect, useState } from "react";

function Music({ setPlaying, playing }) {
  const location = useLocation();
  const param = queryString.parse(location.search);
  const category = param.category;
  const id = +param.id;

  const [currentMusic, setCurrentMusic] = useState({
    title: "loading...",
    thumbnailUrl:
      "https://t4.ftcdn.net/jpg/04/10/17/95/240_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg",
  });

  useEffect(() => {
    async function getData(category, id) {
      try {
        const res = await axios.get(`/${category}/`);
        console.log(res.data);
        const allData = res.data;
        setCurrentMusic(allData[id - 1]);
      } catch (err) {
        console.log({ err });
      }
    }
    getData(category, id);
  }, [category, id]);

  console.log({ currentMusic });

  return (
    <>
      <div className="current-music-container">
        <div className="current-music-detail">
          <div className="current-music-image">
            <img
              src={
                currentMusic
                  ? currentMusic.thumbnailUrl
                  : "https://t4.ftcdn.net/jpg/04/10/17/95/240_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg"
              }
              alt="music-image"
            />
          </div>

          <div className="current-music-info">
            <p>
              <span className="current-music-tag">Title : </span>
              {currentMusic ? currentMusic.title : "loading...."}
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <MusicSlider category={category} setPlaying={setPlaying} />
      <MusicController playing={playing} setPlaying={setPlaying} />
    </>
  );
}

export default Music;
