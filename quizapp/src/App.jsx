import React, { useState } from 'react';
import Question from './components/Question.jsx';
import Result from './components/Result.jsx';
import './App.css';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: 3
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
    answer: 1
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);

  const handleAnswerOptionClick = (index) => {
    setSelectedOption(index);
    const isCorrect = index === questions[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setCorrectOption(questions[currentQuestion].answer);

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setCorrectOption(null);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const handleRestartClick = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setSelectedOption(null);
    setCorrectOption(null);
  };

  return (
    <div className="app">
      <h1 className="app-heading">The React Quiz</h1> 
      {showScore ? (
        <Result score={score} totalQuestions={questions.length} onRestart={handleRestartClick} />
      ) : (
        <Question
          question={{ ...questions[currentQuestion], index: currentQuestion, total: questions.length }}
          onAnswerClick={handleAnswerOptionClick}
          selectedOption={selectedOption}
          correctOption={correctOption}
        />
      )}
    </div>
  );
}

export default App;
