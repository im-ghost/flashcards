import { shuffleArray , options } from "./array"


const getQuestions = async (dSet) => {
  const { name ,cards } = dSet;
  const shuffledCards = shuffleArray(cards);
  const questions = [];
  await shuffledCards.map((card)=>{
    const question = card.question;
    const dOptions = options(card,cards);
    const eachQues = {
      ques: question,
      options: dOptions
    }
    questions.push(eachQues);
  });
  console.log(questions);
  return questions;
}