import { useState, useEffect } from "react";
import data, { getData, debounce } from "../util/util";

const AutoComplete = () => {
  const [userInput, setUserInput] = useState("");
  const [suggestionList, setSuggstionList] = useState([]);

  const inputChangeHandler = async (e) => {
    const value = e.target.value;
    setUserInput((userInput) => value);

    const list = await getData(data, value);

    if (value !== "") {
      setSuggstionList([...list]);
    } else {
      setSuggstionList([]);
    }
  };

  const selectHandler = (value) => {
    setUserInput((userInput) => value);
    setSuggstionList([]);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h3>Auto Complete Component</h3>
      <input
        type="text"
        value={userInput}
        onChange={(e) => inputChangeHandler(e)}
      />
      <ul>
        {suggestionList.map((element, index) => {
          return (
            <li onClick={() => selectHandler(element)} key={index}>
              {element}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AutoComplete;
