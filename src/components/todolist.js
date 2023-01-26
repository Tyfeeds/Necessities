import React from 'react';
import Todo from './todo';

const Todolist = ({todos, setTodos}) => {
    console.log(todos);
    return (
        
        <div className='todo-container'>
            <ul className='todo-list'>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} text={todo.text}/>
                ))}
                {/* <Todo/>
                <Todo/>
                <Todo/>
                <Todo/> */}
            </ul>
        </div>
 
    );
};

export default Todolist;