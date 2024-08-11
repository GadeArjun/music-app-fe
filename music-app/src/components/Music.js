import "./Music.css";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import allSongs from "../data";

function Music() {
  const location = useLocation();
  const param = queryString.parse(location.search);
  const id = param.id;
  const category = param.category.replace(" ", "");
  console.log(category);
  const currentMusic = allSongs[category][id - 1];

  // const currentMusicCategory = allSongs.category;

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
          </div>
        </div>
      </div>
    </>
  );
}

export default Music;
