import React from "react";
import Nav from "../components/Nav";
import HorrorRow from "../components/HorrorRow";
import ComedyRow from "../components/ComedyRow";

const HomePage = () => {
  return (
    <div className="bg-dark">
      <Nav />
      <HorrorRow />
      <ComedyRow />
    </div>
  );
};

export default HomePage;
