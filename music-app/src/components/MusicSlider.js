import "./MusicSlider.css";
import trendingSongs from "../data";
// import { useNavigate } from "react-router-dom";

function MusicSlider({ category }) {
  // const navigate = useNavigate();
  function handleClickToPlayMusic(id) {
    // navigate("/music");
    console.log(id);
  }

  return (
    <>
      <div className="container">
        <div className="category">
          <h2>{category}</h2>
        </div>
        <div className="all-musics">
          {trendingSongs.map((ele) => {
            return (
              <div className="music" onClick={()=>handleClickToPlayMusic(ele.id)}>
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
