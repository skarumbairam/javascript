import { useEffect, useState } from "react";
import { Products } from "../util/data";

const SearchComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggetion, setSuggetion] = useState([]);
  const [apiList, setApiList] = useState([]);

  const getData = async (keyword) => {
    //  =====Type 1 Mimic Promise API in Local
    const filteSuggetionList = Products.filter((item) => {
      const itemTemp = item.title.toLocaleLowerCase();
      const keyTemp = keyword.toLocaleLowerCase();
      if (itemTemp.substring(0, keyTemp.length) === keyTemp) {
        return item;
      }
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(filteSuggetionList), 100);
    });

    // =====Type 2 Fetch all data to local and check
    /*
    const reponse = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsonResponse = await reponse.json();
    setApiList(jsonResponse);

    const filteSuggetionList = apiList.filter((item) => {
      const itemTemp = item.title.toLocaleLowerCase();
      const keyTemp = keyword.toLocaleLowerCase();
      if (itemTemp.substring(0, keyTemp.length) === keyTemp) {
        return item;
      }
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(filteSuggetionList), 100);
    });*/

    // =====Type 3 Make API Call every time and check available

    /*
    return new Promise(async (resolve, reject) => {
      const reponse = await fetch("https://jsonplaceholder.typicode.com/todos");
      const jsonResponse = await reponse.json();
      const filteSuggetionList = jsonResponse.filter((item) => {
        const itemTemp = item.title.toLocaleLowerCase();
        const keyTemp = keyword.toLocaleLowerCase();
        if (itemTemp.substring(0, keyTemp.length) === keyTemp) {
          return item;
        }
      });
      if (filteSuggetionList.length > 0) {
        resolve(filteSuggetionList);
      } else {
        reject("No Product available");
      }
    });*/
  };

  const onChangeHandler = async (e) => {
    const inputText = e.target.value;
    setInputValue(inputText);
    const filteSuggetionList = await getData(inputText);
    inputText !== "" ? setSuggetion(filteSuggetionList) : setSuggetion([]);
  };

  const selectPorduct = (item) => {
    setInputValue(item.title);
    document.getElementById("inputBox").value = item.title;
    setSuggetion([]);
  };

  const debounce = (fn, del = 1000) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), del);
    };
  };

  const Debounce = debounce(onChangeHandler, 200);

  return (
    <div className="searchComponent space">
      <div>
        <input
          id="inputBox"
          type="text"
          placeholder="Search for products"
          onChange={(e) => {
            Debounce(e);
          }}
        ></input>
      </div>
      <div className="listContainer">
        {suggetion.map((item) => {
          return (
            <p
              key={item.id}
              className="list"
              onClick={() => selectPorduct(item)}
            >
              {item.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SearchComponent;
