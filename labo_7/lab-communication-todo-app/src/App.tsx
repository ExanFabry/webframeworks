import { useState } from "react";
import { TodoItem } from "./components/ToDoItem";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";

export interface TodoItem { 
    name: string;
    completed: boolean;
}

const App = () => {
    //To do items
    const [todos, setTodos] = useState<TodoItem[]>([]);
    //To do item
    const [todo, setTodo] = useState("");

    //Add to do to list
    const addTodo = (todo: string) => {
        setTodos([...todos, { name: todo, completed: false }]);
        setTodo("");
    };

    //Mark task complete
    const markCompleted = (index: number, completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, completed: completed} : todo));
    };

    return (
        <div>
            <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo}/>
            <TodoList todos={todos} markCompleted={markCompleted}/>
        </div>
    );

}

export default App;