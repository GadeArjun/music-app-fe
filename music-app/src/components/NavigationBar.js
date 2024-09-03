import { useNavigate } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
  const navigate = useNavigate();
  function handleOnClickHome() {
    navigate("/");
    console.log("click");
  }

  return (
    <>
      <div className="navbar">
        <div className="navigation">
          <ul>
            <span className="home">&#127968;</span>{" "}
            <li onClick={handleOnClickHome}>Home</li>
            <span className="heart">&#10084;</span> <li>Favorite</li>
          </ul>
        </div>
        <div className="search-bar">
          <input placeholder="Search for Music ♫♫♫" />
          <span className="search-icon">🔍</span>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
