import { find, findIndex } from "lodash";
import { sets } from "../../app/store";

class Card {
  constructor(ques, ans, setId) {
    this.ques = ques;
    this.ans = ans;
    this.id = Math.floor(Math.random() * 26637384983);
  }
}

export const addFlashcard = (question, answer, setId) => {
  const card = new Card(question, answer);
  const dSet = find(sets, { name: setId });
  dSet.cards.push(card);
  const index = findIndex(sets, { name: setId });

  if (index !== -1) {
    sets[index] = dSet;
    console.log("Replaced object in data");
  } else {
    console.log("Object with id", setId, "not found in the array");
  }
  localStorage.setItem("flashcards", JSON.stringify(sets));
};
