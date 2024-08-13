import "./NavigationBar.css";

function NavigationBar() {
  return (
    <>
      <div className="navbar">
        <div className="navigation">
          <ul>
            <span className="home">&#127968;</span> <li>Home</li>
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
