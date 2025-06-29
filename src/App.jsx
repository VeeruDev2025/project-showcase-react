import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
