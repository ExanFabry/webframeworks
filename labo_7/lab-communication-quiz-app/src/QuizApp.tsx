import { useEffect } from "react";
import { useState } from "react";
import { Question } from "./Question";
import { LoadingIndicator } from "./LoadingIndicator";

export const QuizApp = ({}) => {
    const [questions, setQuestions] = useState<Quiz[]>([]);

    const [loading, setLoading] = useState(false);

    const loadQuestions = async() => {
        setLoading(true);
        let response = await fetch("https://opentdb.com/api.php?amount=10")
        let questionsResponse: Questions = await response.json();
        setQuestions([...questions, ...questionsResponse.results]);
        setLoading(false);
    }

    useEffect(() => {
        loadQuestions();
    },[])

    return (
        <>
            {questions.map((question, index) => {
                return <Question question={question} userAnswer={question.user_answer} setUserAnswer={(answer) => {
                    let newQuestions = [...questions];
                    newQuestions[index].user_answer = answer;
                    setQuestions(newQuestions);
                }} />
            })}
            <button onClick={loadQuestions}>Load More</button>
            {loading && <div><LoadingIndicator /></div>}


        </>
    )
}

export interface Quiz{
    type:              "boolean" | "multiple";
    question:          string;
    correct_answer:    string;
    incorrect_answers: string[];
    user_answer: string;
}

export interface Questions {
    response_code: number;
    results:       Quiz[];
}