import React,{useState} from 'react';
// import './App.css';
import { QuestionCard } from './components/QuestionCard';
import {fetchQuesiton, Difficluty,QuestionState, AnswerObject} from "./API"
import {GlobalStyle , Wrapper} from "./app.styles"

type Questions = {
  question:string
  answers:string[],
  correct_answer:string,
}

const TOTAL_QUESTIONS = 10



function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers]  = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver,setGameOver] = useState(true);
  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>) => {
     if(!gameOver){
       const answer = e.currentTarget.value
       console.log(answer)
       console.log(questions[number].correct_answer)
       const correct = questions[number].correct_answer === answer
       if(correct) setScore(prev => prev + 1); 
       const answerObject = {
         question:questions[number].question,
         answer,
         correct,
         correctAnswer:questions[number].correct_answer
       }
       setUserAnswers(prev => [...prev,answerObject ])
     }
  }
  const startQuiz = async () => {
    setLoading(true)
    setGameOver(false);
    const newQuestions = await fetchQuesiton(TOTAL_QUESTIONS,Difficluty.EASY);
    console.log(newQuestions)
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }
  const  nextQuestion = async () => {
    const nextQuestion = number + 1;
    if(nextQuestion == TOTAL_QUESTIONS){
      setGameOver(true);
    }else{
      setNumber(nextQuestion)
    }

  }
  return (
    <>
    <GlobalStyle />
    <Wrapper>
        <h1>Quiz</h1>
        {gameOver || userAnswers.length == TOTAL_QUESTIONS ?
        <button className="start" onClick={startQuiz}>Begin Quiz</button>
          :
          null
        }
        { !gameOver ?  
           <p className="score">Score: {score}</p>
           : null
           }
        { loading ? 
         <p className="loading">
          Loading
        </p>
        : null}
        {!loading && !gameOver && <QuestionCard 
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
           question={questions[number]?.question}
           answers={questions[number]?.answers ? questions[number].answers : []}
           userAnswer={userAnswers.length !=  0 ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />}
        {!gameOver && !loading && userAnswers.length === number+1 && number !== TOTAL_QUESTIONS - 1 ?
        <button className="next" onClick={nextQuestion}>
          Next
        </button>
      : null  
      }
    </Wrapper>
    </>
  );
}

export default App;
