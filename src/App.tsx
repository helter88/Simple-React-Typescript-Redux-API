import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getData, State } from "./state/fetchReducer";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state: State) => state.data);
  useEffect(() => {
    dispatch(getData());
  }, []);

  let displayUsers = users?.map((user) => (
    <li key={user.id}>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </li>
  ));

  return (
    <div className="App">
      <h1>People List:</h1>
      <ul>{displayUsers}</ul>
    </div>
  );
}

export default App;
