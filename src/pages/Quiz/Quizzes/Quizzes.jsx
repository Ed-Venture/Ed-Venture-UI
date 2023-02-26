import React from "react";
import Conducted from "./Conducted";
import Participated from "./Participated";

export default function Quizzes() {
  return (
    <div className="container p-5">
      <Conducted/>
      <Participated/>
    </div>
  );
}
