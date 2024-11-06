import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizStart from './components/QuizStart';
import NameForm from './components/NameForm';
import './App.css';

const App = () => {
  return (
    <div className='container'>
    <Router>
      <Routes>
        <Route path="/NameForm" element={<NameForm />} />
        <Route path="/" element={<QuizStart />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;