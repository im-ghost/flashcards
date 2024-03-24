import { sets } from "../../app/store";
import {
  find,
  findIndex
} from "lodash"
export const testFlashcards = () =>{
  alert("test")
}

export const deleteSet = (setId) =>{
  const dSet = find(sets,{ name: setId});
  const newSets = sets.filter(datSet=> datSet.name !== dSet.name);
  localStorage.setItems("flashcards",newSets)
}
export const deleteFlashcarf = (setId,flashcardId) =>{
  const dSet = find(sets,{ name: setId});
  const newSets = sets.filter(datSet=> datSet.name !== dSet.name);
  localStorage.setItems("flashcards",newSets)
}