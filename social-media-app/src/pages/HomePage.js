import React from "react";
import Nav from "../components/Nav";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  return (
    <div className="bg-dark">
      <Nav />
      <div className="row gap-4 justify-content-center mt-5">
        <h1 className="ms-5 text-danger display-2 fw-semibold">Horror</h1>
        <MovieCard
          image="../../images/themenu.png"
          movieDesc="A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises."
        />
        <MovieCard
          image="../../images/megan.png"
          movieDesc="A robotics engineer at a toy company builds a life-like doll that begins to take on a life of its own."
        />
        <MovieCard
          image="../../images/smile.jpeg"
          movieDesc="After witnessing a bizarre, traumatic incident involving a patient, a psychiatrist becomes increasingly convinced she is being threatened by an uncanny entity."
        />
        <MovieCard
          image="../../images/nope.jpeg"
          movieDesc="The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery."
        />
      </div>
    </div>
  );
};

export default HomePage;
