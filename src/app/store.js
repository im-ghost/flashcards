

const s =() => {
  const store =JSON.parse(localStorage.getItem("flashcards"));
  console.log(store)
  return store;
}
export const sets = s();