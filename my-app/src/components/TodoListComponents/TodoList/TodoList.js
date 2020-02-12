import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css'

const TodoList =({todos, onDelete, onDone, onImportant}) =>{
    const element = todos.map((item)=>{
        const {id, ...itemProps} = item;

        return(
            <li key={id}>
                <TodoItem {...itemProps} onDelete={() => onDelete(id)} onDone={() => onDone(id)}
                          onImportant={() => {onImportant(id)}} />
            </li>
        )
    });
    return(
        <ul className="todoList">{element}</ul>
    )
};

export default TodoList ;