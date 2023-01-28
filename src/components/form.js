import React from 'react'

const Form =  ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = (e) => {
        // console.log("fuckreact");
        setInputText(e.target.value)
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
         setTodos  ([ ...todos,
           { text: inputText, completed: false, id: Math.random() * 1000}
       ]);
    setInputText("");
    };
    
    const statusHandler = (e) => {
        console.log(e.target.value)
        setStatus(e.target.value)
    } 

    return (
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>

        <button onClick={submitTodoHandler} type="submit" className="todo-button">
            <i className="fas fa-plus-square"></i>
        </button>

        <div onChange={statusHandler} className='select'>
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>
            </select>
        </div>
        </form>
    );
};
  

export default Form;