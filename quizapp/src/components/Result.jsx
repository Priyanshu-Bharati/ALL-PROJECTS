import React from 'react';
import './Result.css';

function Result({ score, totalQuestions, onRestart }) {
  return (
    <div className="score-section">
      You scored {score} out of {totalQuestions}
      <div className="score-section-new">
    <button onClick={onRestart}>Restart Quiz</button>
  </div>
    </div>
    
  );
}

export default Result;
