import Sets from "../components/sets";
import React from "react"
 import {
  sets
} from "../app/store";
const Home = () => {
  
  return (
    <div className="p-2">
      <Sets sets={sets} />
    </div>
  );
};
export default Home;
