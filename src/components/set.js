import FlashcardArray from "./flashcards";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Set({ dSet }) {
  const navigate = useNavigate();
  useEffect(() => {}, []);
  return (
    <div className="flex flex-col items-center w-screen overflow-scroll">
      <h1 className="bold" onClick={() => navigate(`/sets/${dSet.name}`)}>
        {" "}
        {dSet.name}{" "}
      </h1>
      <FlashcardArray cards={dSet.cards} />
      {/*<Flashcard frontHTML="<h5> yhhhd hhs</h5>" height="5em" width="5em" backHTMLHTML="<h5> shr </h5>"/>*/}
    </div>
  );
}
