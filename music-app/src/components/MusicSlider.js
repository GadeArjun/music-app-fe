import "./MusicSlider.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

function MusicSlider({ category, setPlaying, playing, currentCategory }) {
  const navigate = useNavigate();
  const newCategory = category.replace(" ", "") || "";

  function handleClickToPlayMusic(ele) {
    navigate(`/music?category=${ele.category}&id=${ele.id}`);
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
          `https://legendary-space-succotash-5gxg5574qx4cp6g7-8080.app.github.dev/${newCategory}/`
        );
        setVideoData(res.data);
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
            ? videoData.map((ele) => {
                return (
                  <div
                    key={ele.id}
                    className="music"
                    onClick={() => handleClickToPlayMusic(ele, videoData)}
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
