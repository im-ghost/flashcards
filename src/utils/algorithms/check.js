

const isCorrect = (flashcard,answer) => {
  const { ques ,ans } = flashcard;
  if(ans.toLowerCase().trim() === answer.trim().toLowerCase()){
    return true
  }
  return false;
}