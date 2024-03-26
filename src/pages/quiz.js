import { Card, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { sets } from "../app/store";
import { find } from "lodash";
import { getQuestions } from "../utils/algorithms/quiz";
import { useEffect, useState } from "react";

const Quiz = () => {
  const { name } = useParams();
  const dSet = find(sets, { name: name }); // Find dataset by name

  const [questions, setQuestions] = useState([]); // State to hold questions
  const [selectedAnswers, setSelectedAnswers] = useState([]); // State for user selections

  useEffect(() => {
    const fetchedQuestions = getQuestions(dSet);
    // console.log(fetchedQuestions)
    setQuestions(fetchedQuestions); // Update state with fetched questions
  }, [dSet]); // Dependency array: update on dataset change

  const handleOptionChange = (questionIndex, optionIndex, option) => {
    setSelectedAnswers((prevAnswers) => {
      // Update selectedAnswers based on questionIndex and optionIndex
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = option;
      return updatedAnswers;
    });
  };

  const checkAnswers = () => {
    console.log("chevking");
    const results = questions.map((question, index) => {
      const userSelectedOption = selectedAnswers[index];
      const isCorrect = question.correctAnswer === userSelectedOption;
      return { question, selectedOption: userSelectedOption, isCorrect };
    });
    console.log(results);
    return results; // Array of objects with question, selected option, and correctness
  };
  useEffect(() => {
    // console.log(questions)
  }, [questions]);
  return (
    <div className="">
      <h4> Try answering these questions: </h4>
      {questions.map((question, index) => {
        // console.log(question)
        return (
          <Card key={index}>
            <Button onClick={checkAnswers}>Check Answers</Button>
            <div>
              <p>{question.ques}</p>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <input
                    type="radio"
                    id={`option-${index}-${optionIndex}`}
                    name={`question-${index}`}
                    value={optionIndex} // Store option index as value
                    onChange={() =>
                      handleOptionChange(index, optionIndex, option)
                    }
                    checked={selectedAnswers[index] === optionIndex} // Set checked state
                  />
                  <label htmlFor={`option-${index}-${optionIndex}`}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Quiz;
