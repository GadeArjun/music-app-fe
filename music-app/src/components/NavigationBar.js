import { useNavigate } from "react-router-dom";
import "./NavigationBar.css";
import { useState } from "react";
import axios from "axios";

function NavigationBar({ setSearchMusicData, setLoading , setRecent}) {
  const navigate = useNavigate();
  const [searchMusicName, setSearchMusicName] = useState("");

  function handleOnClickHome() {
    navigate("/");
    // console.log("click");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      // console.log(searchMusicName);
      if(searchMusicName.length !== 0)
      {
        searchMusicData(searchMusicName);
      navigate(`/search/`);
      }
      else
      {
        searchMusicData("trending hindi")  
        navigate(`/search/`);
      }
    }
  }
  function handleSearchClick() {
    console.log(searchMusicName);
    if (searchMusicName.length !== 0) {
      searchMusicData(searchMusicName);
      navigate(`/search/`);
    }
    else{
      searchMusicData("Trending hindi");
    navigate(`/search/`);
    }
  }

  function handleOnSearchChange(e) {
    setSearchMusicName(e.target.value);
  }
  async function searchMusicData(searchQuery) {
    try {
      setLoading(true);
      const res = await axios.post(
        `/searchsongs/${searchQuery}`
      );
      console.log(res.data);
      setSearchMusicData(res.data);
      setLoading(false);
      setRecent(false)
    } catch (err) {
      console.log(err);
    }
  }
  function handleOnFocus() {
    navigate("/search");
  }

  return (
    <>
      <div className="navbar">
        <div className="navigation">
          <ul>
            <li>
              <span className="app-name">
                <a href="https://musicapp-brown.vercel.app">
                  <span className="title-music">Music</span>
                  <span className="title-app">App</span>
                </a>
              </span>
            </li>
            <span className="home">&#127968;</span>
            <li onClick={handleOnClickHome}>Home</li>
            <span className="heart">&#10084;</span>
            <li>Favorite</li>
          </ul>
        </div>
        <div className="search-bar">
          <input
            name="music-search"
            placeholder="Search for Music ♫♫♫"
            onChange={handleOnSearchChange}
            onKeyDown={handleKeyDown}
            onFocus={handleOnFocus}
          />
          <span className="search-icon" onClick={handleSearchClick}>
            🔍
          </span>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
