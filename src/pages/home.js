import Sets from "../components/sets";
import React from "react"
 import {
  sets
} from "../app/store";
import { useEffect } from "react";
const Home = () => {
  useEffect(()=>{
   // console.log(sets)
  },[])
  return (
    <div className="p-2">
      <Sets sets={sets} />
    </div>
  );
};
export default Home;
