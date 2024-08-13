import "./MusicSlider.css";
import allSongs from "../data";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function MusicSlider({ category, setPlaying }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Reset scroll position when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const newCategory = category.replace(" ", "");
  const currentCategory = allSongs[newCategory];
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
          {currentCategory.map((ele) => {
            return (
              <div
                className="music"
                onClick={() => handleClickToPlayMusic(ele.id)}
              >
                <div className="music-image">
                  <img src={ele.thumbnail} alt="music-image" />
                </div>
                <div className="music-title">
                  <p >{ele.title}</p>
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
