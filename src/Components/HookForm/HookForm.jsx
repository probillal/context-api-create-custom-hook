import React from "react";
import useInputField from "../../Hook/UseInputField";

const HookForm = () => {
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={emailOnChange}
          name=""
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name=""
          onChange={passwordOnChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
