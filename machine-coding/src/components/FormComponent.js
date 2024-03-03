import { useEffect, useState } from "react";

const FormComponent = () => {
  const [remember, setRemeber] = useState(false);

  const POST_URL = "https://jsonplaceholder.typicode.com/posts";
  const option = {};

  const setLocalStorage = (obj) => {
    localStorage.setItem("formData", JSON.stringify(obj));
  };

  const getFormData = () => {
    const formData = localStorage.getItem("formData");
    return JSON.parse(formData) || {};
  };

  const submitHandler = (e) => {
    const getAllInput = document.querySelectorAll("input");
    const obj = {};
    getAllInput.forEach((el) => {
      const getId = el.getAttribute("id");
      const getElementValue = el.value ? el.value : "none";
      obj[getId] = getElementValue;
    });

    //document.getElementById("remeberMe").checked = true;
    if (remember) {
      setLocalStorage(obj);
      console.log("Form data will be saved while submitting");
    } else {
      const obj = {};
      setLocalStorage(obj);
      console.log("Form data will not be saved while submitting");
    }

    getAllInput.forEach((el) => {
      el.value = "";
    });
    document.querySelectorAll("input").value = "";
    // un check the check box
    document.getElementById("remeberMe").checked = false;
  };

  const rememberHandler = (e) => {
    setRemeber(!remember);
    if (remember) {
      e.target.removeAttribute("checked");
    } else {
      e.target.setAttribute("checked", "checked");
    }
  };

  const setFormData = (formData) => {
    const getAllInput = document.querySelectorAll("input");
    getAllInput.forEach((el) => {
      const getId = el.getAttribute("id");
      el.value = formData[getId] ? formData[getId] : "";
    });
  };

  useEffect(() => {
    const formData = getFormData();
    setFormData(formData);
  }, []);
  return (
    <div>
      <p>Remember Me {String(remember)}</p>
      <div id="form" className="formContainer" action="">
        <div className="item">
          <label for="name">Name</label>
          <input type="text" placeholder="Enter Name" id="name" name="name" />
        </div>
        <div className="item">
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            id="email"
            name="email"
          />
        </div>
        <div className="item">
          <label for="phone">Phone</label>
          <input
            type="number"
            placeholder="Enter Phone"
            id="phone"
            name="phone"
          />
        </div>
        <div className="item">
          <label for="car">
            <input type="radio" name="car" id="cartype" value="Suzuki" />
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
      </div>
      <input
        type="checkbox"
        id="remeberMe"
        onChange={(e) => {
          rememberHandler(e);
        }}
      />
      <label for="checkbox">Rember Me</label>
    </div>
  );
};

export default FormComponent;
