import React from 'react';
import eruda from "eruda"
import { hi } from "lodash";
import { Typography } from "@mui/material"
function App() {
  React.useEffect(()=>{
    eruda.init();
    console.log("init")
    console.log(hi)
  },[])
  return (
    <div className="App">
     <Typography variant="h4"> FlashCards </Typography>
    </div>
  );
}

export default App;
