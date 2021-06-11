import React,{useState} from 'react';
// import './App.css';
import { QuestionCard } from './components/QuestionCard';
import {fetchQuesiton, Difficluty} from "./API"
type Questions = {
  question:string
  answers:string[]
}

const TOTAL_QUESTIONS = 10

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers]  = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver,setGameOver] = useState(true);
  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>) => {

  }
  const startQuiz = async () => {
    fetchQuesiton(TOTAL_QUESTIONS,Difficluty.EASY)
  }
  const  nextQuestion = async () => {
    
  }
  return (
    <div className="App">
        <h1>Quiz</h1>
        <button className="start" onClick={startQuiz}>Begin Quiz</button>
        <p className="score">Score:</p>
        <p>
          Loading
        </p>
        <QuestionCard 
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
           question={questions[number]?.question}
           answers={questions[number]?.answers ? questions[number].answers : []}
           userAnswer={userAnswers.length !=  0 ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
        <button className="next" onClick={nextQuestion}>
          Next
        </button>
    </div>
  );
}

export default App;
