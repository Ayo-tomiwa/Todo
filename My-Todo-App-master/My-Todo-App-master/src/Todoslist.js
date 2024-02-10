import React from 'react'

const Todos = ({ todos, deleteTodo }) => {
    const todolist = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
                </div>
            )
        })
    ) : (<p>You have no todos left, YaY!</p>)
    2
    return (
        <div className="todolist collection center">
            {todolist}
        </div>
    )
}
export default Todos;