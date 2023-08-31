import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigate,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  //I can only get it if action function return actual data
  //and its getting returned in pages/Authentication.jsx when error occures
  const data = useActionData();

  //useNavigate is used to know when form is being processed and do some action
  //like spinner or something to let user know whats going on
  const navigation = useNavigate();
  const isSubmitting = navigation.state === "submitting";

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors && (
          <ul>
            {/* errors is object */}
            {Object.values(data.errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSubmitting}>
            {isSubmitting ? "..." : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
