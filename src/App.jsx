import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/components/card/Home";
import ChapterDetail from "../src/components/card/ChapterDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chapter/:id" element={<ChapterDetail />} />
    </Routes>
  );
}

export default App;
