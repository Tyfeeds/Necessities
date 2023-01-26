import React, { useState } from 'react';
import Form from './components/form';
import Todolist from './components/todolist';
import './App.css';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
       <header>
          <h1>Ty's daily necessities</h1>
      </header>
        <Form 
          inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/> 
         <Todolist todos={todos} setTodos={setTodos} /> 
      
    </div>
  );
}

export default App;
