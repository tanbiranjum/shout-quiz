import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import parse from "html-react-parser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizCard = ({
  info,
  rightCount,
  setRightCount,
  wrongCount,
  setWrongCount,
  index,
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
    toast.success(info.correctAnswer);
  };

  const handleCount = (question) => {
    if (question === info.correctAnswer) {
      toast.success("Woh! You got it right!");
      setRightCount(rightCount + 1);
    } else {
      toast.error("Wrong Answer!");
      setWrongCount(wrongCount + 1);
    }
  };

  return (
    <div className=" bg-white mt-8 py-8 rounded drop-shadow-xl">
      <div className="flex justify-between p-6">
        <div>
          <p className="text-xl text-blue-900 font-bold mb-2">
            Question: {index + 1}
          </p>
          <p className="text-xl !text-blue-700 font-semibold">
            {parse(`${info.question}`)}
          </p>
        </div>
        <div onClick={handleShowCorrectAnswer}>
          <FaEye className="cursor-pointer text-blue-700 text-xl" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 px-4">
        {info.options.map((question, id) => (
          <button
            key={id}
            className={`border border-blue-700 rounded p-4 cursor-pointer ${
              (selected && handleSelect(question)) || "bg-white"
            } ${!selected && "hover:bg-blue-700 hover:text-white"}`}
            onClick={() => {
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
