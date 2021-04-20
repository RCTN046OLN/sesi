import React from "react";
import { fetchUsers } from "../store/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleGetUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div>
      <h1>User Page</h1>
      <button onClick={handleGetUsers}>Get Users</button>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

export default User;
