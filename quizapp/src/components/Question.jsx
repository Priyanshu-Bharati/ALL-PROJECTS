import React from 'react';
import Option from './Option';
import './Question.css';

function Question({ question, onAnswerClick, selectedOption, correctOption }) {
  return (
    <div className="question-section">
      <div className="question-count">
        <span>Question {question.index + 1}</span>/{question.total}
      </div>
      <div className="question-text">{question.question}</div>
      <div className="answer-section">
        {question.options.map((option, index) => (
          <Option
            key={index}
            optionText={option}
            onClick={() => onAnswerClick(index)}
            isSelected={selectedOption === index}
            isCorrect={correctOption === index}
            showCorrect={correctOption !== null}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
