import React, { useState } from "react";
import { login } from "../store/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoginSuccess, isLoginError, isLoginPending } = useSelector(
    (state) => state
  );

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Email </label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => handleEmailChange(e)}
        />
        <br />
        <br />
        <label>Password </label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => handlePasswordChange(e)}
        />
        <br />
        <br />
        <input type="submit" />
        {isLoginPending && <p>Silahkan tunggu...</p>}
        {isLoginSuccess && <p>Login berhasil</p>}
        {isLoginError && <p>{isLoginError?.message}</p>}
      </form>
    </div>
  );
};

export default Login;
