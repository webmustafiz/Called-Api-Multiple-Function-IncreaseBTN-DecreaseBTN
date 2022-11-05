import React from 'react';
import './Todo.css'
const Todo = (props) => {
    return (
        <div className='todo'>
            <h3>Todos Id : {props.ID}</h3>
            <h4>Title : {props.Title}</h4>
            <h5>Completed : {props.Compelted}</h5>
        </div>
    );
};

export default Todo;