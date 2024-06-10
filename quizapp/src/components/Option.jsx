import React from 'react';
import './Option.css';

function Option({ optionText, onClick, isSelected, isCorrect, showCorrect }) {
  const getButtonClass = () => {
    if (showCorrect) {
      if (isCorrect) return 'option-button correct';
      if (isSelected) return 'option-button wrong';
    }
    return 'option-button';
  };

  return (
    <button
      className={getButtonClass()}
      onClick={onClick}
      disabled={showCorrect}
    >
      {optionText}
    </button>
  );
}

export default Option;
