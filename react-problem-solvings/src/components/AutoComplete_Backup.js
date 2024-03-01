import { useEffect, useState } from "react";
import data, { debounce } from "../util/util";

const AutoComplete = () => {
  const [userInput, setUerInput] = useState("");
  const [filterData, setFilterData] = useState([]);

  const getSuggestion = (keyWord) => {
    const result = data.filter(
      (item) =>
        item.substring(0, keyWord.length).toLowerCase() ===
        keyWord.toLowerCase()
    );

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result), 100);
    });
  };

  const getUserInput = async (e) => {
    const value = e.target.value;
    const filterResult = await getSuggestion(value);
    setUerInput(value);

    if (value === "") {
      setFilterData([]);
    } else {
      setFilterData([...filterResult]);
    }
  };

  return (
    <div>
      <h3>Auto Complete Component</h3>
      <div className="search-bar-container">
        <h3>Search</h3>
        <input type="text" onChange={(e) => getUserInput(e)} />
        <ul>
          {filterData.map((item, idx) => (
            <li key={`${item}-${idx}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoComplete;
