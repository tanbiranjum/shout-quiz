import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

const QuizCard = ({ info }) => {
  const [selected, setSelected] = useState();

  const handleSelect = (question) => {
    if (selected === question && selected === info.correctAnswer) {
      return "bg-green-400";
    } else if (selected === question && selected !== info.correctAnswer) {
      return "bg-red-400";
    } else if (question === info.correctAnswer) {
      return "bg-green-400";
    }
  };

  return (
    <div className="bg-slate-100 mt-4 py-8">
      <div className="p-6">{parse(`${info.question}`)}</div>
      <div className="grid grid-cols-2 gap-4 p-2">
        {info.options.map((question, id) => (
          <button
            key={id}
            className={`bg-white p-4 cursor-pointer ${
              selected && handleSelect(question)
            }`}
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
