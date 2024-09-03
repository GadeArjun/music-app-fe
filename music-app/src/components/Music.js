import "./Music.css";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import allSongs from "../data";
import MusicSlider from "./MusicSlider";
import MusicController from "./MusicController";

function Music({ setPlaying, playing }) {
  const location = useLocation();
  const param = queryString.parse(location.search);
  const id = +param.id;
  const category = param.category.replace(" ", "");
  const currentMusic = allSongs[category][id - 1];
  // setPlaying({play:true , id:id , category:param.category})
  // const currentMusicCategory = allSongs.category;

  

  

  // console.log(musicId);

  return (
    <>
      <div className="current-music-container">
        <div className="current-music-detail">
          <div className="current-music-image">
            <img src={currentMusic.thumbnail} alt="music-image" />
          </div>

          <div className="current-music-info">
            <p>
              <span className="current-music-tag">Title : </span>
              {currentMusic.title}
            </p>
            {/* <iframe
              width="0px"
              height="0px"
              src={`https://www.youtube.com/embed/${musicId}?autoplay=${autoplay}&vq=large&controls=1&mute=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe> */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <MusicSlider category={param.category} setPlaying={setPlaying} />
      <MusicController playing={playing} setPlaying={setPlaying} />
      <br />
      <br />
      <br />
      <hr />



    </>
  );
}

export default Music;
// {//VTw0wVvEmPw?si=aX9rc95jTPGsA7Vz}
