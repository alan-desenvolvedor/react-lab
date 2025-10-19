import React, { useState, useEffect } from "react";

const App = () => {
  
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Falha ao buscar os dados.');
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Erro na busca:", error);
      });
  }, []); 


  console.log(users); 

  return (
    <div>
      {}
      {users.map((user) => (
        <h1 key={user.id}>{user.login}</h1> 
      ))}
    </div>
  );
};

export default App;