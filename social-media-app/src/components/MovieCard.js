import React from "react";

const MovieCard = ({ movieDesc, image }) => {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <p class="card-text">{movieDesc}</p>
          <div className="btn btn-success">Click Here For More</div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
