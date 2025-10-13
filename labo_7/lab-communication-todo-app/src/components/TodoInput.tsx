export const TodoInput = ({todo, setTodo, addTodo}: {todo: string, setTodo: React.Dispatch<React.SetStateAction<string>>, addTodo: (todo: string) => void}) => {
    return(
        <>
            {/* Add to do */}
            <div>
                <input id="todo" type="text" value={todo} onChange={(event) => setTodo(event.target.value)}/>
                <button onClick={() => addTodo(todo)}>Add</button>
            </div>
        </>
    )
}