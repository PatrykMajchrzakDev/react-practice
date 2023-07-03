import React from "react";
import "./Form.css";

const UsersList = ({ users }) => {
  return (
    <ul className="card list">
      {users.map(({ id, user }) => (
        <li key={id}>
          {user.username} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
