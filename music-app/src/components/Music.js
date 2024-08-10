import "./Music.css";

function Music() {
  return (
    <>
      <div className="current-music-container">
        <div className="current-music-detail">
          <div className="current-music-image">
            <img
              src="https://i.ytimg.com/vi/gPpQNzQP6gE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArGxYrlrz3f-B8etBZ1B9WlO93mA"
              alt="music-image"
            />
          </div>

          <div className="current-music-info"></div>
        </div>
      </div>
    </>
  );
}

export default Music;
