import React from "react";
import eruda from "eruda";
import Home from "./pages/home";
import { Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  React.useEffect(() => {
    eruda.init();
  }, []);
  return (
    <div className="App">
      <Typography variant="h4"> FlashCards </Typography>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
