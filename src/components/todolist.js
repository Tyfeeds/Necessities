import React from 'react';
import Todo from './todo';

const Todolist = ({todos, setTodos, filteredTodos}) => {
    console.log(todos);
    return (
        
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredTodos.map((todo) => (
                    <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} text={todo.text}/>
                ))}
              
            </ul>
        </div>
 
    );
};

export default Todolist;