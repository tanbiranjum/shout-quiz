import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import parse from "html-react-parser";

const QuizCard = ({
  info,
  rightCount,
  setRightCount,
  wrongCount,
  setWrongCount,
}) => {
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

  const handleCount = (question) => {
    if (question === info.correctAnswer) {
      setRightCount(rightCount + 1);
    } else {
      setWrongCount(wrongCount + 1);
    }
  };

  return (
    <div className="border-2 border-blue-700 mt-8 py-8 rounded drop-shadow-lg">
      <div className="flex justify-between p-6">
        <p className="text-xl flex gap-2 text-blue-700 font-semibold">
          Question: {parse(`${info.question}`)}
        </p>
        <div onClick={handleShowCorrectAnswer}>
          <FaEye className="cursor-pointer text-blue-700 text-xl" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 py-2 px-4">
        {info.options.map((question, id) => (
          <button
            key={id}
            className={`border border-blue-700 rounded p-4 cursor-pointer ${
              (selected && handleSelect(question)) || "bg-white"
            } ${!selected && "hover:bg-blue-700 hover:text-white"}`}
            onClick={(e) => {
              setSelected(question);
              handleCount(question);
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
