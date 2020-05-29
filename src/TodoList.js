import React from 'react';
import Todo from './Todo';



const TodoList = (props) => {

        return (
            <div className="list-wrapper">
                {props.todos.length > 0 && props.todos.map((text,index) => (
                <Todo key={index} content={text} handleDelete={props.handleDelete}/>
              ))}
            </div>
        )
}

export default TodoList;