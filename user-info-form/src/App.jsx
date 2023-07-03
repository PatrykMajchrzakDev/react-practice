import { useState } from "react";
import Form from "./components/Form";
import UsersList from "./components/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const onFormSumbition = (user) => {
    setUsersList((prevUsers) => {
      return [...prevUsers, { user, id: Math.random() }];
    });
  };
  return (
    <div>
      <Form formSubmitionHandler={onFormSumbition} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
