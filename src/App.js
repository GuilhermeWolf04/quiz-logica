import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizStart from './components/QuizStart';
import NameForm from './components/NameForm';
import Quiz from './components/Quiz';
import ScoreScreen from './components/ScoreScreen';
import './App.css';

const App = () => {
  return (
    <div className='container'>
    <Router>
      <Routes>
        <Route path="/" element={<QuizStart />} />
        <Route path="/NameForm" element={<NameForm />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Score" element={<ScoreScreen />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;