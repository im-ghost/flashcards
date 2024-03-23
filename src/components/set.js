import { Flashcard, FlashcardArray } from "react-quizlet-flashcard";
export default function Set({ dSet }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="bold"> {dSet.name} </h1>
      <FlashcardArray
        cards={dSet.cards}
        frontContentStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      {/*<Flashcard frontHTML="<h5> yhhhd hhs</h5>" height="5em" width="5em" backHTMLHTML="<h5> shr </h5>"/>*/}
    </div>
  );
}
