import React from "react";
import { Users } from "./Data/Users";

const App = () => {
  console.log(Users);

  return (
    <div class="container">
      {Users.map((user) => (
        <>
          <h1>ID: {user.id}</h1>
          <h1>Nome: {user.nome}</h1>
          <h1>Idade: {user.idade}</h1>
        </>
      ))}
    </div>
  );
};

export default App;
