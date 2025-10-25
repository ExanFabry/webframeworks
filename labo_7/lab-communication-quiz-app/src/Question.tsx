import type { Quiz } from "./QuizApp";
import { TrueFalseQuestion } from "./TrueFalseQuestion";
import {decode} from 'html-entities';
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";

interface QuestionProps {
    question: Quiz,
    userAnswer: string,
    setUserAnswer: (answer: string) => void
}
export const Question = ({question, setUserAnswer, userAnswer} : QuestionProps) => {
    let color = "black";
    if (userAnswer !== undefined) {
        if (userAnswer == question.correct_answer) {
            color = "lightgreen";
        } else {
            color = "red";
        }
    }
    return (
        <div style={{backgroundColor: color}}>
            <div>{decode(question.question)}</div>
            {userAnswer === undefined ? (<div>
                {question.type === "boolean" && <TrueFalseQuestion question={question} setUserAnswer={setUserAnswer} userAnswer={userAnswer}/>}
                {question.type === "multiple" && <MultipleChoiceQuestion question={question} setUserAnswer={setUserAnswer} userAnswer={userAnswer}  />}
            </div>) : (
                <div style={{fontWeight: "bold"}}>
                    {(userAnswer !== question.correct_answer) ? <p>You answered {userAnswer} and the correct answer was {question.correct_answer}</p> : <p>You answered {userAnswer} which is the correct answer</p>}
                </div>
            )
            }
        </div>
    )
}