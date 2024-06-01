import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [intialValue, finalValue] = useState(1)
  const [counter,setcounter] = useState(0)



  // const [count,setCount] = useState(1);

  // useEffect(()=>{
  //   let sum=0;
  //   for(let i=1;i<=intialValue;i++){
  //     sum+=i;
  //   }
  //   setCount(sum);
  // },[intialValue]);
  
  
  let count = useMemo(function(){ //slightly better then useEffect because we don't use two state variables
    let sum=0;
    for(let i=1;i<=intialValue;i++){
      sum+=i;
    }
    return sum;
  },[intialValue])
  
  return (
    <div>
      <input onChange={(e)=>{finalValue(e.target.value)}}></input>
      <div>sum of 1 to {intialValue} is {count}</div>
      <button onClick={()=>{setcounter(counter+1)}}>button {counter}</button>
    </div>
  )
}

export default App
