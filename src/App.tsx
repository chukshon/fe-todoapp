import React from "react";
import { Login, List } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/list" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
