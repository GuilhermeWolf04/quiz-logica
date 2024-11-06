import React from 'react';
import '../styles/QuizStart.css';
import gatesImage from '../assets/Gates.png';
import { Link } from 'react-router-dom';

function QuizStart() {
  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <div className='quiz-header'>
          <div className="quiz-title">
            <h1>Quiz</h1>
            <h1>Lógica</h1>
          </div>
          <Link to="/Nameform" className="start-button">Start</Link>
        </div>
          <div className="logic-gates-image">
            <img src={gatesImage} alt="Portas Lógicas" />
          </div>
        </div>
    </div>
  );
}

export default QuizStart;