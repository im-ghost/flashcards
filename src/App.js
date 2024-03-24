import React from "react";
import eruda from "eruda";
import Home from "./pages/home";
import Set from "./pages/set";
import Quiz from "./pages/quiz";
import { Typography } from "@mui/material";
import Layout from "./components/layout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  React.useEffect(() => {
    eruda.init();
  }, []);
  return (
      <Router>
    <Layout>
      <Typography variant="h4"> FlashCards </Typography>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Home />} />
          <Route path="/notes" element={<Home />} />
          <Route path="/sets/:id" element={<Set />} />
          <Route path="/tests/:name" element={<Quiz />} />
        </Routes>
    </Layout>
      </Router>
  );
}

export default App;
