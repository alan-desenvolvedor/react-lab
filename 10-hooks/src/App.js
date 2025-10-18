import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("Alan");
  const [toggle, setToggle] = useState("Billy");

  return (
    <div>
      <h1>Contagem: {counter}</h1>
      <h1>Nome: {name}</h1>
      <h1>Alternar: {toggle ? "VERDADEIRO" : "FALSO"}</h1>
      <button onClick={() => setCounter(counter + 1)}>Aumentar</button>
      <button onClick={() => setCounter(counter - 1)}>Diminuir</button>
      <br />
      <br />
      <button onClick={() => setName("Karoline")}>Alterar Nome</button>
      <br />
      <br />
      <button onClick={() => setToggle(!toggle)}>Alternar</button>
    </div>
  );
};

export default App;
