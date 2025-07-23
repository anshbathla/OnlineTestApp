import React, { useState } from 'react';
import './App.css';

// Sample questions by topic
const quizData = {
  history: [
    { question: 'Who was the first President of the United States?', options: ['Abraham Lincoln', 'George Washington', 'John Adams', 'Thomas Jefferson'], answer: 'George Washington' },
    { question: 'When did World War II end?', options: ['1945', '1939', '1918', '1950'], answer: '1945' },
    { question: 'Who discovered America?', options: ['Christopher Columbus', 'Vasco da Gama', 'James Cook', 'Marco Polo'], answer: 'Christopher Columbus' },
    { question: 'Which empire built the Colosseum?', options: ['Greek', 'Roman', 'Ottoman', 'Byzantine'], answer: 'Roman' },
    { question: 'Who wrote the Declaration of Independence?', options: ['Benjamin Franklin', 'Thomas Jefferson', 'George Washington', 'Alexander Hamilton'], answer: 'Thomas Jefferson' },
  ],
  geography: [
    { question: 'What is the capital of France?', options: ['Rome', 'Berlin', 'Paris', 'Madrid'], answer: 'Paris' },
    { question: 'Which river flows through Egypt?', options: ['Amazon', 'Ganges', 'Nile', 'Yangtze'], answer: 'Nile' },
    { question: 'Mount Everest is located in which mountain range?', options: ['Andes', 'Himalayas', 'Alps', 'Rockies'], answer: 'Himalayas' },
    { question: 'Which is the largest ocean?', options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'], answer: 'Pacific' },
    { question: 'Which desert is the largest in the world?', options: ['Sahara', 'Gobi', 'Kalahari', 'Arctic'], answer: 'Sahara' },
  ],
  it: [
    { question: 'What does CPU stand for?', options: ['Central Power Unit', 'Computer Personal Unit', 'Central Processing Unit', 'Control Process Unit'], answer: 'Central Processing Unit' },
    { question: 'Which language is used for web development?', options: ['HTML', 'C++', 'Python', 'Java'], answer: 'HTML' },
    { question: 'Who founded Microsoft?', options: ['Steve Jobs', 'Bill Gates', 'Mark Zuckerberg', 'Larry Page'], answer: 'Bill Gates' },
    { question: 'What does HTTP stand for?', options: ['HyperText Transfer Protocol', 'HighText Transfer Protocol', 'HyperTool Text Protocol', 'Hyperlink Transfer Protocol'], answer: 'HyperText Transfer Protocol' },
    { question: 'Which device stores data permanently?', options: ['RAM', 'ROM', 'Hard Drive', 'Cache'], answer: 'Hard Drive' },
  ]
};

function App() {
  const [topic, setTopic] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleTopicSelect = (selectedTopic) => {
    setTopic(selectedTopic);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
  };

  const handleOptionClick = (option) => {
    const updatedAnswers = [...selectedAnswers, option];
    if (currentQuestion + 1 < quizData[topic].length) {
      setSelectedAnswers(updatedAnswers);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setSelectedAnswers(updatedAnswers);
      setShowResult(true);
    }
  };

  const getScore = () => {
    const questions = quizData[topic];
    return selectedAnswers.filter((answer, i) => answer === questions[i].answer).length;
  };

  const resetQuiz = () => {
    setTopic(null);
    setSelectedAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  if (!topic) {
    return (
      <div className="landing-container">
        <h1 className="app-title">🧠 Online Quiz App</h1>
        <p className="subtitle">Choose a topic to begin your test</p>
        <div className="button-group">
          <button className="topic-button" onClick={() => handleTopicSelect("history")}>History</button>
          <button className="topic-button" onClick={() => handleTopicSelect("geography")}>Geography</button>
          <button className="topic-button" onClick={() => handleTopicSelect("it")}>IT</button>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="quiz-container">
        <h2 className="app-title">✅ Quiz Completed</h2>
        <p className="subtitle">You scored {getScore()} out of {quizData[topic].length}</p>
        <button className="topic-button" onClick={resetQuiz}>🏠 Go to Home</button>
      </div>
    );
  }

  const questionObj = quizData[topic][currentQuestion];

  return (
    <div className="quiz-container">
      <h2 className="app-title">Topic: {topic.toUpperCase()}</h2>
      <p className="subtitle">Question {currentQuestion + 1} of {quizData[topic].length}</p>
      <h3 className="question-text">{questionObj.question}</h3>
      <div className="button-group">
        {questionObj.options.map((option, index) => (
          <button key={index} className="topic-button" onClick={() => handleOptionClick(option)}>{option}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
