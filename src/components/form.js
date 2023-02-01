import React from 'react';
import {  FaDownload } from 'react-icons/fa';

const Form =  ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = (e) => {
        // let message =[]
        // if (setInputText.value ==='' || setInputText.value == null) 
        //     message.push("Input is required")
        console.log("fuckreact");
        setInputText(e.target.value)
    };
    // let message =[]
    const submitTodoHandler = (e) => {
         e.preventDefault();
        //  if (inputText === ''  || inputText == null)  return
        if (inputText ==='' || inputText == null) return
         
         setTodos  ([ ...todos,
           { text: inputText, completed: false, id: Math.random() * 1000}
       ]);
    setInputText("");
    };
    
    const statusHandler = (e) => {
        // console.log(e.target.value)
        setStatus(e.target.value)
    } 

    return (
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>

        <button onClick={submitTodoHandler} type="submit" className="todo-button">
            <i className="fas fa-plus-square"></i>
        </button>

        <div onChange={statusHandler} className="select">
               <select name="todos" className="filter-todo">
                <option value="all">All <FaDownload></FaDownload></option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>
            </select>
        </div>
        </form>
    );
};
  

export default Form;