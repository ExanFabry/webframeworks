import { TodoItem } from "./ToDoItem";
import type { TodoItem as TodoItems } from "../App";
export const TodoList = ({todos, markCompleted}: {todos: TodoItems[], markCompleted: (index: number, event: boolean) => void}) => {
    return(
        <>
            {/* Show to dos */}
            <div>
                {todos.map((todo, index) => (
                    <div key={index}>
                        <TodoItem todo={todo} markCompleted={markCompleted} index={index}/>
                    </div>
                ))}
            </div>
        </>
    )
}