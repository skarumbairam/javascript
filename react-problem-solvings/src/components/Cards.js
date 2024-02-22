import { useEffect, useState } from "react";
import axios from "axios";

const Cards = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonData = await data.json();
      setData([...jsonData]);
    } catch (error) {
      console.log("error.message", error.message);
    }
  };

  useEffect(() => {
    // getData(); // Return a Promise
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData([...response.data]);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  }, []);

  return (
    <div>
      <h2>Card Component</h2>
      <p>Loading Data from External API</p>
      <div className="cards">
        {data.length === 0 && <h2>Loading.....</h2>}

        {data.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

const Card = (props) => {
  const { name } = props.item;
  return (
    <div className="card">
      <p>{name}</p>
    </div>
  );
};

export default Cards;
