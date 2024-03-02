import { useState } from "react";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [car, setCar] = useState("");

  const POST_URL = "https://jsonplaceholder.typicode.com/posts";
  const option = {};

  const submitHandler = () => {
    let formData = document.getElementById("form");
    console.log(formData);
  };
  return (
    <div>
      <form id="form" className="formContainer" action={POST_URL}>
        <div className="item">
          <label for="name">Name</label>
          <input type="text" placeholder="Enter Name" name="name" />
        </div>
        <div className="item">
          <label for="email">Email</label>
          <input type="email" placeholder="Enter email" name="email" />
        </div>
        <div className="item">
          <label for="phone">Phone</label>
          <input type="number" placeholder="Enter Phone" name="phone" />
        </div>
        <div className="item">
          <label for="car">
            <input type="radio" name="car" value="Suzuki" />
            Suziki
          </label>
          <label for="car">
            Honda
            <input type="radio" name="car" value="Honda" />
          </label>
          <label for="car">
            Hundai
            <input type="radio" name="car" value="Hundai" />
          </label>
        </div>

        <button className="btn item" onClick={() => submitHandler()}>
          Submit
        </button>
      </form>
      <input type="checkbox" />
      <label for="checkbox">Rember Me</label>
    </div>
  );
};

export default FormComponent;
