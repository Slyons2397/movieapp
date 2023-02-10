import React, { useState } from "react";
import Nav from "../components/Nav";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  return (
    <>
      <Nav />
      <div className="row gap-1 justify-content-center mt-5">
        <h1 className="ms-5 text-danger">Horror:</h1>
        <MovieCard image="../../images/applepage.png" movieDesc="k" />
        <MovieCard
          image="../../images/applepage.png"
          movieDesc="A great new flick featuring top actors"
        />
        <MovieCard
          image="../../images/applepage.png"
          movieDesc="A great new flick featuring top actors"
        />
        <MovieCard
          image="../../images/applepage.png"
          movieDesc="A great new flick featuring top actors"
        />
        <MovieCard
          image="../../images/applepage.png"
          movieDesc="A great new flick featuring top actors"
        />
      </div>
    </>
  );
};

export default HomePage;
