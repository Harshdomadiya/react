import { useState } from 'react'
import './App.css'
import { memo } from 'react'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const inputFunction = useCallback(()=>{// it's stope reendering of same funtion because react does't understand there is a same function
    console.log("hi! hello")
  },[])

  return (
      <div>
        <ButtonComponent inputFunction={inputFunction}></ButtonComponent>
        <button onClick={()=>{
          setCount(count+1)
        }}>click me {count}</button>

      </div>
  )
}
  const ButtonComponent =  memo(()=>{
    console.log("child render")
    return <div>
      <button>button clicked</button>
    </div>
  })


export default App
