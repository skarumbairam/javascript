import { useEffect, useState } from "react";

const TodoComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [todosList, setTodosList] = useState(getToDosList);

  const saveToDosList = () => {
    localStorage.setItem("todosList", JSON.stringify(todosList));
  };

  function getToDosList() {
    const list = localStorage.getItem("todosList") || [];
    return JSON.parse(list);
  }

  useEffect(() => {
    saveToDosList();
  }, [todosList]);

  // {task: '', id: ''};
  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmitHandler = (e) => {
    if (inputValue === "") return;
    const addNewList = { task: inputValue, id: todosList.length + 1 };
    setTodosList([...todosList, addNewList]);
    setInputValue("");
  };

  const removeTaskHandler = (taskId) => {
    const filteredList = todosList.filter((item, idx) => item.id !== taskId);
    setTodosList(filteredList);
  };

  return (
    <div className="space todolist-container">
      <div className="flex">
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Type your todo list item"
            value={inputValue}
            onChange={(e) => onChangeHandler(e)}
          />
          <button onClick={() => onSubmitHandler()}>Submit</button>
        </form>
      </div>
      <div className="">
        {todosList.map((list) => (
          <ListComponent
            key={list.id}
            task={list.task}
            taskId={list.id}
            removeHandler={removeTaskHandler}
          />
        ))}
      </div>
    </div>
  );
};

const ListComponent = ({ task, taskId, removeHandler }) => {
  const [select, setSelect] = useState(false);
  const onClickHandler = () => {
    removeHandler(taskId);
  };

  const selectTask = () => {
    setSelect(!select);
  };

  return (
    <div className="listComponent">
      <p className={select ? "strike" : ""} onClick={() => selectTask()}>
        {task}
      </p>
      <button
        className="btn"
        onClick={() => {
          onClickHandler();
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoComponent;
