import { shuffle } from "lodash";

const shuffleArray = (array) => {
  const shuffled = shuffle(array);
  return shuffled;
};

const options = (questionFlashcard, flashcards) => {
  const shuffled = shuffleArray(flashcards);
  const options = [questionFlashcard.answer, ...shuffled.splice(0, 6)];
  return options;
};
