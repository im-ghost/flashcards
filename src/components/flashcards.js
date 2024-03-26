import {} from "@mui/material";

import React, { useState, useEffect } from "react";
const Flashcard = ({ card, setId }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-full rounded-lg shadow-md overflow-hidden h-64  m-2 min-w-64 flex justify-center align-center items-center">
      <div
        className={`absolute top-0 left-0 w-full h-full transform transition duration-750 ease-in-out ${isFlipped ? "[transform:rotateX(180deg)]" : ""}`}
      >
        <div className="" onClick={deleteFlashcard(setId, card.id)}>
          {" "}
          X{" "}
        </div>
        <div
          className={`z-10 h-64 transiton duration-1000 [transform:rotateX(0deg)] w-64 p-4 ${isFlipped ? "hidden" : ""}`}
          onClick={handleFlip}
        >
          <h1>Question : {card.ques}</h1>
        </div>
        <div
          className={`z-10 [transform:rotateX(0deg)] transiton duration-1000 h-64 w-64 p-4 ${isFlipped ? "" : "hidden"} `}
          onClick={handleFlip}
        >
          <h1>Answer:{card.ans}</h1>
        </div>
      </div>
    </div>
  );
};

export default function FlashcardArray({ cards, setId }) {
  return (
    <div className="flex w-full overflow-scroll">
      {cards.map((card) => (
        <Flashcard card={card} setId={setId} />
      ))}
    </div>
  );
}
