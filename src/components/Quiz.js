import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quiz.css';
import questionsData from '../QuestionsData/questions.json';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackColor, setFeedbackColor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const shuffledQuestions = questionsData.sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestions(shuffledQuestions);
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (!selectedOption) {
      setFeedbackMessage("Please choose an alternative");
      setFeedbackColor("red");
      return;
    }

    // Extrai a letra da opção selecionada para comparar com a resposta correta
    const selectedAnswerLetter = selectedOption[0];
    const isCorrect = selectedAnswerLetter === questions[currentQuestionIndex].answer;

    setAnswers((prevAnswers) => [...prevAnswers, isCorrect]);

    setFeedbackMessage("Next Question");
    setFeedbackColor("green");

    setTimeout(() => {
      setFeedbackMessage("");
    }, 2000);

    setSelectedOption(null);

    if (currentQuestionIndex + 1 >= questions.length) {
      // Contagem final de acertos ao término do quiz
      const finalScore = [...answers, isCorrect].filter((answer) => answer).length;
      navigate('/score', { state: { score: finalScore, totalQuestions: questions.length, answers: [...answers, isCorrect] } });
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quizApp-container">
      {feedbackMessage && (
        <div className={`quizApp-feedback quizApp-feedback-${feedbackColor}`}>
          {feedbackMessage}
        </div>
      )}
      <div className="quizApp-header">
        <h2>Question {currentQuestionIndex + 1}</h2>
        <h3>{questions[currentQuestionIndex].question}</h3>
      </div>
      <div className="quizApp-options">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <div
            key={index}
            className={`quizApp-option ${selectedOption === option ? 'quizApp-selected' : ''}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <button
        className="quizApp-nextButton"
        onClick={handleNextQuestion}
        disabled={!selectedOption}
      >
        {currentQuestionIndex < 9 ? 'Next' : 'Finish'}
      </button>
    </div>
  );
};

export default Quiz;
