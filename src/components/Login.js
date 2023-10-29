import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

function Login() {
  const dispatch = useDispatch();

  const user = {
    name: "marcos",
    age: 21,
    email: "lott.marcos@gmail.com",
  };

  return (
    <div>
      <button onClick={() => dispatch(login(user))}>login</button>
    </div>
  );
}

export default Login;
