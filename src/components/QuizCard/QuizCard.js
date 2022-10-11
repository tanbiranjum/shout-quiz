import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import parse from "html-react-parser";

const QuizCard = ({ info }) => {
  const [selected, setSelected] = useState();

  const handleSelect = (question) => {
    if (selected === question && selected === info.correctAnswer) {
      return "bg-green-700 text-white";
    } else if (selected === question && selected !== info.correctAnswer) {
      return "bg-red-700 text-white";
    } else if (question === info.correctAnswer) {
      return "bg-green-700 text-white";
    }
  };

  const handleShowCorrectAnswer = () => {
    alert(info.correctAnswer);
  };

  return (
    <div className="bg-slate-100 mt-4 py-8">
      <div className="flex justify-between p-6">
        <p className="text-xl flex gap-2">Question: {parse(`${info.question}`)}</p>
        <div onClick={handleShowCorrectAnswer}>
          <FaEye className="cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 p-2">
        {info.options.map((question, id) => (
          <button
            key={id}
            className={`border rounded p-4 cursor-pointer ${
              (selected && handleSelect(question)) || "bg-white"
            } ${!selected && "hover:bg-blue-700 hover:text-white"}`}
            onClick={(e) => {
              setSelected(question);
            }}
            disabled={selected}
          >
            <p className="text-left">{question}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
