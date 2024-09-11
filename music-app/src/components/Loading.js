
import "./MusicSlider.css";

function Loading({ category }) {
    
  return (
    <>
      <div className="container">
        <div className="category">
          <h2>{category}</h2>
        </div>
        <div className="all-musics">

          <div className="music">
            <div className="music-image">
              <img
                src="https://t4.ftcdn.net/jpg/04/10/17/95/240_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg"
                alt="music-image"
              />
            </div>
            <div className="music-title">
              <p>
                <br />
                <br />
                {category} Song Title...
              </p>
            </div>
          </div> <div className="music">
            <div className="music-image">
              <img
                src="https://t4.ftcdn.net/jpg/04/10/17/95/240_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg"
                alt="music-image"
              />
            </div>
            <div className="music-title">
              <p>
                <br />
                <br />
                {category} Song Title...
              </p>
            </div>
          </div> <div className="music">
            <div className="music-image">
              <img
                src="https://t4.ftcdn.net/jpg/04/10/17/95/240_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg"
                alt="music-image"
              />
            </div>
            <div className="music-title">
              <p>
                <br />
                <br />
                {category} Song Title...
              </p>
            </div>
          </div> <div className="music">
            <div className="music-image">
              <img
                src="https://t4.ftcdn.net/jpg/04/10/17/95/240_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg"
                alt="music-image"
              />
            </div>
            <div className="music-title">
              <p>
                <br />
                <br />
                {category} Song Title...
              </p>
            </div>
          </div> <div className="music">
            <div className="music-image">
              <img
                src="https://t4.ftcdn.net/jpg/04/10/17/95/240_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg"
                alt="music-image"
              />
            </div>
            <div className="music-title">
              <p>
                <br />
                <br />
                {category} Song Title...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Loading;
