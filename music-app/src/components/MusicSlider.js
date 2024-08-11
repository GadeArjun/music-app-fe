import "./MusicSlider.css";
import allSongs from "../data";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function MusicSlider({ category }) {
  useEffect(() => {
    // Reset scroll position when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  function handleClickToPlayMusic(id) {
    navigate(`/music?id=${id}&category=${category}`);
  }

  const newCategory = category.replace(" ", "");
  const currentCategory = allSongs[newCategory];

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
