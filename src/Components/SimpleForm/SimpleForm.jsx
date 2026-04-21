import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
