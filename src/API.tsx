export const fetchQuesiton = async (amount:number, difficluty:Difficluty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficluty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
   await console.log(data)
}

export enum Difficluty{
    EASY='easy',
    MEDIUM="medium",
    HARD="hard"
}


export type Question = {
    category:string;
    correct_answer:string;
    difficulty:string;
    incorrect_answers: string[];
    question: string
    tupe:string
}

export type QuestionState = Question  & {
    answers:string[]
}