import type { TodoItem as TodoType } from "../App";

export const TodoItem = ({todo, markCompleted, index}: {todo: TodoType, markCompleted: (index: number, event: boolean) => void, index: number}) => {
    return(
        <>
            {/* Show to do item */}
            <input type="checkbox" checked={todo.completed} onChange={(event) => markCompleted(index, event.target.checked)}/>
            <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</span>
        </>
    )
}