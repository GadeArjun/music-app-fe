import "./MusicSlider.css";

function Loading({ category }) {
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="container">
        <div className="category">
          <h2>{category}</h2>
        </div>
        <div className="all-musics">
          {array.map((ele) => {
            return (
              <>
                <div className="music">
                  <div className="music-image">
                    <img
                      src="https://t4.ftcdn.net/jpg/04/10/17/95/240_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg"
                      alt={`music-image${ele}`}
                    />
                  </div>
                  <div className="music-title">
                    <p>
                      {category} <br /> Title Loading...
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Loading;
