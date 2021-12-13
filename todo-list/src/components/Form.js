import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  // Gets the value of the input box.
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  // Runs the submit button functions
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.floor(Math.random() * 1000000)}
    ]);
    setInputText('');
  }

  // Displays the status
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  // The form for the site.
  return(
    <form>
      <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">Add Item</button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;