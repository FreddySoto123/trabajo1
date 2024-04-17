import { useEffect, useState } from "react";
import "./App.css"
import Card from "./componentes/Card";

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://661038040640280f219c99f5.mockapi.io/users')
      .then((res) => {
        return res.json();
      }).then((data) => {
        setUsers(data)
        console.log(data)
      });
  }, [])
  return (
    <>
     {
      users.map(user=>(
        <Card key={user.id} user={user}/>
      ))
     }
    </>
  )
}

export default App