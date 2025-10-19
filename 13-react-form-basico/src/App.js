import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleChange1(event) {
    console.log(event.target.value);
    setFirstName(event.target.value);
  }

  function handleChange2(event) {
    console.log(event.target.value);
    setLastName(event.target.value);
  }

  return (
    <form>
      <input type="text" placeholder="Firstname" onChange={handleChange1} />
      <input type="text" placeholder="LastName" onChange={handleChange2} />
    </form>
  );
};

export default App;
