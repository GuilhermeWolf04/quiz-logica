import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/ScoreScreen.css';

const ScoreScreen = () => {
  const location = useLocation();
  const { score, totalQuestions, answers } = location.state || { score: 0, totalQuestions: 0, answers: [] };

  return (
    <div className="score-screen">
      <div className="score-container">
        <h2>Score</h2>
        <p>{score} - {totalQuestions}</p>
        <div className="score-details">
          {answers && answers.map((isCorrect, index) => (
            <div key={index} className="score-item">
              <span className="question-number">{index + 1}</span>
              <span className={`answer-result ${isCorrect ? 'correct' : 'wrong'}`}>
                {isCorrect ? 'Correct' : 'Wrong'}
              </span>
            </div>
          ))}
        </div>
        <div className="score-buttons">
          <button onClick={() => window.location.href = '/'}>Exit</button>
          <button onClick={() => window.location.href = '/quiz'}>Play again</button>
        </div>
      </div>
      {score >= 7 ? (
        <div className="feedback-message success">Good job! Thanks for playing!</div>
      ) : (
        <div className="feedback-message failure">Better luck next time!</div>
      )}
    </div>
  );
};

export default ScoreScreen;