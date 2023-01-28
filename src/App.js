import React, { useState, useEffect } from 'react';
import Form from './components/form';
import Todolist from './components/todolist';
import './App.css';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);


     //use effect
     useEffect (() =>{
      FilterHandler();
     },[todos, status])
  //functipn

  const FilterHandler = ()=> {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
       
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false))
          break; 

        default:
          setFilteredTodos(todos);
          break
    }
  };
  
  return (
    <div className="App">
       <header>
          <h1>Ty's daily necessities</h1>
      </header>
        <Form 
          inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} status={status} setStatus={setStatus} /> 
         <Todolist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/> 
      
    </div>
  );
}

export default App;
