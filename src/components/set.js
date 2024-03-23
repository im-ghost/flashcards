import { Flashcard,FlashcardArray } from "react-quizlet-flashcard";
export default function Set(){
    const cards=[
        {
          id: 1,
         frontHTML: "What is the capital of <u>Alaska</u>?",
      backHTML: "Juneau",
      frontHTMLChild: <div>Hello there</div>,
      
    },
    {
      id: 2,
      frontHTML: "What is the capital of New Mexico?",
      backHTML: "Santa Fe",
    },
    {
      id: 3,
      frontHTML: "What is the capital of Arizona?",
      backHTML: "Phoenix",
    },
  ];
  return (
    <div>
    <h1> f </h1>
    <FlashcardArray
    cards={cards}
    style={{
      height: 6em,
      width:6em
    }}
    />
      <Flashcard frontHTML="<h5> yhhhd hhs</h5>" height="5em" width="5em" backHTMLHTML="<h5> shr </h5>"/>
      
    </div>
  );
}