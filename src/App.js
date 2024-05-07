import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, password);
    setUserData([{ name: name, password: password }, ...userData]);
    console.log(userData);
  };
  const handleName = (e) => setName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  return (
    <div style={{ textAlign: "center" }}>
      Registration Form
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter your UserName: </label>
        <input
          type="text"
          id="username"
          value={name}
          onChange={handleName}
          required
        />
        <br />
        <label htmlFor="password">Enter password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {userData.map((item) => (
        <ol>
          <li>{item.name}</li>
          <li>{item.password}</li>
        </ol>
      ))}
    </div>
  );
};

export default App;
