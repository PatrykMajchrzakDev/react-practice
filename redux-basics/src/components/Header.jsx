import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const notLoggedIn = (
    <>
      <h1>Redux Auth</h1>
      <p className={classes.notAuthText}>
        Please use below form to access more options
      </p>
    </>
  );
  const userLoggedIn = (
    <div className={classes.container}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
  return (
    <header className={classes.header}>
      {isAuthenticated ? userLoggedIn : notLoggedIn}
    </header>
  );
};

export default Header;
