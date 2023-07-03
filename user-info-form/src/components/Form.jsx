import { useState } from "react";
import ErrorModal from "./UI/ErrorModal";
import "./Form.css";
const Form = ({ formSubmitionHandler }) => {
  const intialUserInput = {
    username: "",
    age: "",
  };
  const [formData, setFormData] = useState(intialUserInput);
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (formData.username.trim().length === 0 || formData.age <= 0) {
      setError({
        title: "Invalid input",
        message:
          "Please enter valid name and age (non-empty and positive numbers)",
      });
      return;
    } else {
      formSubmitionHandler(formData);
      setFormData(intialUserInput);
    }
  };

  const inputChangeHandler = (input, value) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [input]: value,
      };
    });
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseConfirm={errorHandler}
        />
      )}
      <div className="card">
        <form className="form" onSubmit={addUserHandler}>
          <label htmlFor="">Username</label>
          <input
            value={formData["username"]}
            onChange={(event) =>
              inputChangeHandler("username", event.target.value)
            }
            type="text"
          />

          <label htmlFor="">Age</label>
          <input
            value={formData["age"]}
            type="number"
            onChange={(event) => inputChangeHandler("age", +event.target.value)}
          />

          <button className="button" type="submit">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
