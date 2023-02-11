import React from "react";

const MovieCard = ({ movieDesc, image }) => {
  return (
    <>
      <div className="card bg-black mb-5 pb-3" style={{ width: "18rem" }}>
        <img
          src={image}
          className="card-img-top mt-3"
          style={{ height: "400px" }}
          alt="..."
        />
        <div class="card-body text-center">
          <p class="card-text text-white">{movieDesc}</p>
        </div>
        <div className="btn btn-outline-info">Watch Now</div>
      </div>
    </>
  );
};

export default MovieCard;
