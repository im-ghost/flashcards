import { shuffle } from "lodash";

export const shuffleArray = (array) => {
  const shuffled = shuffle(array);
  return shuffled;
};

export const options = (questionFlashcard, flashcards) => {
  const shuffled = shuffleArray(flashcards);
  const ans = [];
  shuffled.map((shuf) => ans.push(shuf.ans));
  const options = [questionFlashcard.answer, ...ans.splice(0, 6)];
  return options;
};
