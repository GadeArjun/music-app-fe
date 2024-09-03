import "./MusicSlider.css";
// import allSongs from "../data";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MusicSlider({ category, setPlaying, playing, currentCategory }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Reset scroll position when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const newCategory = category.replace(" ", "");
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    async function fetchMusicData() {
      try {
        const res = await axios.get(
          `https://legendary-space-succotash-5gxg5574qx4cp6g7-8080.app.github.dev/${newCategory.toLowerCase()}/`
        );
        console.log(res.data);
        setCurrentData(res.data);
      } catch (err) {
        console.log({ err });
      }
    }
    fetchMusicData();
  }, [newCategory]);

  function handleClickToPlayMusic(id) {
    navigate(`/music?id=${id}&category=${category}`);
    setPlaying({ play: true, id: id, category: category });
  }

  return (
    <>
      <div className="container">
        <div className="category">
          <h2>{category}</h2>
        </div>
        <div className="all-musics">
          {currentData.map((ele) => {
            return (
              <div
                key={ele.id}
                className="music"
                onClick={() => handleClickToPlayMusic(ele.id)}
              >
                <div className="music-image">
                  <img src={ele.thumbnailUrl} alt="music-image" />
                </div>
                <div className="music-title">
                  <p>{ele.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MusicSlider;
