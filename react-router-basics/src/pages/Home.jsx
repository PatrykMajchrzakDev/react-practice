import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="/products">products page</Link>
      </p>
    </>
  );
};

export default Home;
