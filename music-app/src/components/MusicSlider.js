import "./MusicSlider.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

function MusicSlider({ category, setPlaying }) {
  const navigate = useNavigate();
  const newCategory = category.replace(" ", "") || "";

  function handleClickToPlayMusic(ele, id) {
    navigate(`/music?category=${ele.category}&id=${id}`);
    setPlaying({
      play: true,
    });
  }

  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://music-app-rz0u.onrender.com/${newCategory}`
        );
        setVideoData(res.data);
        console.log(res.data);

        setLoading(false);
      } catch (err) {
        console.log({ err });
      }
    };
    getData();
  }, [newCategory]);

  console.log(videoData);

  if (loading || videoData.length === 0) {
    return (
      <>
        <Loading category={category}></Loading>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="category">
          <h2>{category}</h2>
        </div>
        <div className="all-musics">
          {videoData.length > 0
            ? videoData.map((ele, index) => {
                return (
                  <div
                    key={index + 1}
                    className="music"
                    onClick={() => handleClickToPlayMusic(ele, index + 1)}
                  >
                    <div className="music-image">
                      <img src={ele.thumbnailUrl} alt="music-image" />
                    </div>
                    <div className="music-title">
                      <p>{ele.title}</p>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
}

export default MusicSlider;
