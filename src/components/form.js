import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { addFlashcard } from "../utils/functions/create";

export default function Form() {
  const [ques, setQues] = useState("");
  const [ans, setAns] = useState("");
  return (
    <Card raised={true}>
      <TextField
        id="outlined-controlled"
        label="Question"
        placeholder="Question"
        value={ques}
        onChange={(event) => {
          setQues(event.target.value);
        }}
      />
      <TextField
        id="outlined-controlled"
        label="Ans"
        placeholder="Answer"
        value={ans}
        onChange={(event) => {
          setAns(event.target.value);
        }}
      />
      <Button onClick={() => addFlashcard(ques, ans)}> Add </Button>
    </Card>
  );
}
