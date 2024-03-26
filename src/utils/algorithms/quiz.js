import { shuffleArray, options } from "./array";

export const getQuestions = (dSet) => {
  const { name, cards } = dSet;
  const shuffledCards = shuffleArray(cards);

  const questions = [];
  shuffledCards.map((card) => {
    const question = card.ques;
    const dOptions = options(card, cards);
    const eachQues = {
      ques: question,
      options: dOptions,
      correctAnswer: card.ans,
    };
    questions.push(eachQues);
  });
  //console.log(questions);
  return questions;
};
