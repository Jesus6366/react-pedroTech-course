import React from "react";
import { useContext } from "react";
import { AppContext } from "../App.js";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      const res = await fetch("https://catfact.ninja/fact");
      return res.json();
    },
  });

  // Handle loading state
  if (isLoading) return <h1>Loading...</h1>;

  // Handle error state
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <h1>
      This is the home page <p>{data?.fact}</p>
      <button onClick={refetch}>Update</button>
    </h1>
  );
};

export default Home;
