import React from "react"
import {AnswerObject} from "../API"

type Props ={
    question:string;
    answers:string[];
    callback:(e:React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer:AnswerObject | undefined;
    questionNumber:number;
    totalQuestions: number;

}

export const QuestionCard:React.FC<Props> = ({question,answers,callback,userAnswer,questionNumber,totalQuestions}) => {
    return(
        <div>
            <p>
                Question : {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html:question}} />
            {console.log(userAnswer)}
            <div>
                {
                    answers.map((ans) => (
                        <div>
                            <button value={ans} disabled={userAnswer != undefined} onClick={callback }> 
                                <span dangerouslySetInnerHTML={{__html:ans}} />
                            </button>                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}