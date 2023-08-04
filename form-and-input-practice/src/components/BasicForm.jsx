import useInput from "../hooks/use-inputUsingReducer";

const BasicForm = () => {
  const {
    value: enteredName,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim(""));

  const {
    value: enteredLastName,
    isValid: lastNameInputIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: lastNameInputReset,
  } = useInput((value) => value.trim(""));
  const {
    value: enteredEmail,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.includes("@"));

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameInputIsValid || !lastNameInputIsValid || !emailInputIsValid) {
      return;
    }

    nameInputReset();
    lastNameInputReset();
    emailInputReset();
  };

  const nameInputError = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputError = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputError = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputError}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>
        <div className={lastNameInputError}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputError}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be empty and include @</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
