import {
  sets
} from "../app/store";
import {
  useParams,
  useNavigate
} from "react-router-dom";
import Form from "../components/form"
import {
  find
} from "lodash";
import  FlashcardArray  from "../components/flashcards";
import { Button } from "@mui/material"
import { useEffect, useState } from "react";
import { testFlashcards,deleteSet } from "../utils/functions/flashcard";

export default function Set(){
  const { id } = useParams();
  const navigate = useNavigate();
  const dSet = find(sets,{ name: id});
  const [showForm,setShowForm] = useState(false)
  useEffect(()=>{
    
  //  console.log(dSet);
  },[dSet,sets])
  if(dSet){
  return(
    <div className="">
     <h1 className="bold"> {dSet.name} </h1>
     { showForm && (<div> <span onClick={()=> setShowForm(false)}> X </span> <Form/> </div>) }
      <FlashcardArray
        cards={dSet.cards}
      />
      <Button onClick={()=> setShowForm(true)}> Add a flashcard</Button>
      <Button onClick={()=>navigate(`/tests/${dSet.name}`)}> Test Flashcard</Button>
      <Button onClick={()=>deleteSet(dSet.id)} className="bg-red-800"> Delete Set</Button>
    </div> 
    )
  }
  return "Hi"
}