import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Todo from '../Todo/Todo';
import './Todos.css'

const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
        .then(data=>setTodos(data))
    },[])
    return (
        <div>
            <h1 className='header'>Total Todos {todos.length}</h1>

            <div className='todos'>
                
                {
                todos.map(todo=>console.log(todo))
            }
            {
                todos.map(todo => <Todo
                
                    ID={todo.id}
                    Title={todo.title}
                    Compelted={todo.completed}
                ></Todo>)
            }
            </div>
        </div>
    );
};

export default Todos;