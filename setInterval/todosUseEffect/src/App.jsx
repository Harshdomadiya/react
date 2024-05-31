import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [Todos, setTodos] = useState([])

  useEffect(()=>{
    // async function fetchdata(){
    //     const data = await fetch("https://sum-server.100xdevs.com/todos");
    //     const jdata = await data.json();
    //     console.log(jdata);
    //     setTodos(jdata);
    // }
    
    // setInterval(fetchdata(),100000);
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async function(res){
          const json = await res.json();
          console.log(json.todos)
          setTodos(json.todos);
        })
    }, 10000);
  },[])

  return (
    <div>
        {Todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}> </Todo>)} 
    </div>
  )
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <br/>
    <h4>{description}</h4>
  </div>
}

export default App
