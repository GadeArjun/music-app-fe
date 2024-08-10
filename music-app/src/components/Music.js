import "./Music.css";

function Music() {
  return (
    <>
      <div className="current-music-container">
        <div className="current-music-detail">
          <div className="current-music-image">
            <img
              src="https://i.ytimg.com/vi/nFgsBxw-zWQ/hq720.jpg"
              alt="music-image"
            />
          </div>

          <div className="current-music-info">
            <p>
             <span className="current-music-tag">Title : </span> Aayi Nai -Stree 2 | Shraddha Kapoor | Rajkummar Rao |
              Sachin-Jigar |Pawan Singh,Simran,Divya,Amitabh
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Music;
