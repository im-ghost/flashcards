import {
  shuffle
}  from "lodash";

const shuffleArray = (array) =>{
  const shuffled = shuffle(array)
  return shuffled;
}