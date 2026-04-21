import React, { useState } from "react";

const ControlledFiled = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleFromSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    if (password.length < 8) {
      setError("Password must be needed 8 character or longer ");
    } else {
      setError("");
    }
  };
  const handleOnChangePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 8) {
      setError("Password must be needed 8 character or longer ");
    } else {
      setError("");
    }
  };
  const handleOnChangeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleFromSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={handleNameChange}
          defaultValue={name}
        />
        <br />
        <input
          type="email"
          name="email"
          onChange={handleOnChangeEmail}
          defaultValue={email}
          placeholder="Email"
          id=""
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          onChange={handleOnChangePassword}
          defaultValue={password}
          placeholder="Password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledFiled;
