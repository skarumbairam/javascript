import { useState } from "react";

const ToDo = () => {
  const [value, setValue] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addListHandler = (e) => {
    setValue((value) => e.target.value);
  };
  const submitTaskHandler = () => {
    setTaskList([...taskList, value]);
    setValue("");
  };

  const removeTask = (index) => {
    setTaskList(taskList.filter((item, idx) => idx !== index));
    // setTaskList(taskList.splice(index, 1));
  };
  return (
    <div>
      <h3>Simple To Do List</h3>
      <input type="text" value={value} onChange={addListHandler}></input>
      <button onClick={submitTaskHandler}>Add Item</button>
      <ul>
        {taskList.map((element, index) => {
          return (
            <List
              key={value + index}
              value={element}
              index={index}
              removeTask={removeTask}
            />
          );
        })}
      </ul>
    </div>
  );
};

const List = (props) => {
  const { value, index, removeTask } = props;
  const [complete, setComplete] = useState(false);
  const completeHandler = () => {
    setComplete((complete) => !complete);
  };

  const deleteHandler = () => {
    removeTask(index);
  };

  return (
    <div>
      <li onClick={completeHandler} className={complete ? "strike" : ""}>
        {value}
      </li>
      {complete && <button onClick={deleteHandler}> Delete </button>}
    </div>
  );
};

export default ToDo;
