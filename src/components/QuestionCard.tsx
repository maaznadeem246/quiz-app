import React from "react"

type Props ={
    question:string;
    answers:string[];
    callback:(e:React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer:string | undefined;
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
            <div>
                {
                    answers.map((ans) => (
                        <div>
                            <button disabled={userAnswer == undefined} onClick={callback }> 
                                <span dangerouslySetInnerHTML={{__html:ans}} />
                            </button>                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}