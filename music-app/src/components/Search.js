import axios from "axios";
import { useEffect, useState } from "react";
import SearchLoading from "./SearchLoading";
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchMusicData, setSearchMusicData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recent , setRecent] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get("/searchsongs/");
        setSearchMusicData(res.data);
        setLoading(false);
        setRecent(true)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  function handleSearchMusicClick(id) {
    navigate(`/music?category=searchsongs&id=${id}`);
  }

  if (searchMusicData.length === 0 || loading) {
    return (
      <>
        <NavigationBar />
        <SearchLoading />
      </>
    );
  }

  return (
    <>
      <NavigationBar
        setSearchMusicData={setSearchMusicData}
        setLoading={setLoading}
        setRecent = {setRecent}
      />

<h2 className="loading"> {`${recent ? "Recent search result..." : "Your search result..."}`}</h2>

      <div className="loading-container">
        <div className="all-loading-music">
          {searchMusicData.map((ele, index) => {
            return (
              <>
                <div
                  className="loading-music"
                  onClick={() => handleSearchMusicClick(index + 1)}
                >
                  <div className="loading-music-image">
                    <img src={ele.thumbnailUrl} alt={`music-image`} />
                  </div>
                  <div className="loading-music-title">
                    <p>
                      <span>Title : </span> {ele.title}
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

export default Search;
