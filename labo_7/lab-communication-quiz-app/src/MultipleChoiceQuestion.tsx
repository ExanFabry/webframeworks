import type { Quiz } from "./QuizApp";
import { decode } from "html-entities";

interface MultipleChoiceQuestionProps {
    question: Quiz,
    userAnswer: string,
    setUserAnswer: (answer: string) => void
}

export const MultipleChoiceQuestion = ({question, setUserAnswer} : MultipleChoiceQuestionProps) => {
    let allQuestions = [question.correct_answer, ...question.incorrect_answers];
    allQuestions.sort(() => Math.random() - 0.5);
    return (
            <select onChange={(event) => setUserAnswer(event.target.value)}> 
                <option value="">Select an answer</option>
                {allQuestions.map((answer, index) => (
                    <option key={index} value={answer}>{decode(answer)}</option>
                ))}
            </select>
    );
}