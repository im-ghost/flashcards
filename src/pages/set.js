import {
  sets
} from "../app/store";
import {
  useParams
} from "react-router-dom";
import Form from "../components/form"
import {
  find
} from "lodash";
import { Flashcard, FlashcardArray } from "react-quizlet-flashcard";
import { Button } from "@mui/material"
import { useEffect, useState } from "react";
import { testFlashcard,deleteSet } from "../utils/functions/flashcard";

export default function Set(){
  const { id } = useParams();
  const dSet = find(sets,{ name: id});
  const [showForm,setShowForm] = useState(false)
  useEffect(()=>{
    console.log(sets);
    console.log(dSet);
  },[dSet,sets])
  if(dSet){
  return(
    <div className="">
     <h1 className="bold"> {dSet.name} </h1>
     { showForm && (<div> <span onClick={()=> setShowForm(false)}> X </span> <Form/> </div>) }
      <FlashcardArray
        cards={dSet.cards}
        frontContentStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        backContentStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <Button onClick={()=> setShowForm(true)}> Add a flashcard</Button>
      <Button onClick={()=>testFlashcard(dSet.id)}> Test Flashcard</Button>
      <Button onClick={()=>deleteSet(dSet.id)} className="bg-red-800"> Delete Set</Button>
    </div> 
    )
  }
  return "Hi"
}