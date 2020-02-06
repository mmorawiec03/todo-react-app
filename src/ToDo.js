import React from 'react';

const ToDo = (props) => {
    const { todos, deleteTodo } = props;
    const todoList = todos.map(todo => {
        return (
            <div className="todo row border m-2" key={todo.id}>
                <div className="col-8 row">
                    <button className="btn btn-danger m-2" onClick={() => {deleteTodo(todo.id)}}>x</button>
                    <p className="m-2 p-2">{todo.content}</p>
                </div>
                <div className="col-4 text-right">
                    <p className="m-2 p-2">{todo.date}</p>
                </div>
            </div>
        );
    });
    return todoList.length ? (
        <div className="todo-list">
            { todoList }
        </div>
    ) : (
        <h3 className="text-center m-5">Nothing to do.</h3> 
    );
}

export default ToDo;