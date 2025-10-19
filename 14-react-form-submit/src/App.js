import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.firstName || !formData.lastName) {
      alert("Necessário preencher todos os campos!");
    } else {
      alert("Enviado com sucesso!");
      console.log("Dados do Formulário:", formData);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Firstname"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="LastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
