import React from "react";
import { useContext } from "react";
import { AppContext } from "../App.js";

const Home = () => {
  const { username } = useContext(AppContext);
  return <h1>This is the home page and user is: {username}</h1>;
};

export default Home;
