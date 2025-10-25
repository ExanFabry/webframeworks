import type { Quiz } from "./QuizApp";

export const TrueFalseQuestion = ({userAnswer, setUserAnswer}: TrueOrFalseQuestionProps) => {
    return(
        <>
            <div>
                <input type="radio" checked={userAnswer == "True"} onChange={() => setUserAnswer("True")} /> True
                <input type="radio" checked={userAnswer == "False"} onChange={() => setUserAnswer("False")} /> False
            </div>
        </>
    )
}
interface TrueOrFalseQuestionProps {
    question: Quiz,
    userAnswer: string,
    setUserAnswer: (answer: string) => void
}