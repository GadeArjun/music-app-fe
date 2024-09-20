import "./SearchLoading.css";

function SearchLoading() {
  const array = [1, 2, 3, 4, 5];
  return (
    <>
      <h2 className="loading">Music Loading...</h2>
      <div className="loading-container">
        <div className="all-loading-music">
          {array.map((ele) => {
            return (
              <>
                <div className="loading-music">
                  <div className="loading-music-image">
                    <img
                      src="https://t4.ftcdn.net/jpg/04/10/17/95/240_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg"
                      alt={`loading-music-image${ele}`}
                    />
                  </div>
                  <div className="loading-music-title">
                    <p>
                      <span>Title : </span> Title is Loading...
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

export default SearchLoading;
