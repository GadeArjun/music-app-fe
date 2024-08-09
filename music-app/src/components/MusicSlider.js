import "./MusicSlider.css";
import trendingSongs from "../data";

function MusicSlider({ title, category, imageUrl }) {
  return (
    <>
      <div className="container">
        <div className="category">
          <h2>{category}</h2>
        </div>
        <div className="all-musics">
          {trendingSongs.map((ele) => {
            return (
              <div className="music">
                <div className="music-image">
                  <img src={ele.imageUrl} alt="music-image" />
                </div>
                <div className="music-title">
                  <p>
                    {(ele.title + " - " + ele.artist).length <= 30
                      ? ele.title + " - " + ele.artist
                      : ele.title + " - " + ele.artist.split(" ")[0] + " ..."}
                  </p>
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
