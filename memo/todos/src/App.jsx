import { Fragment, useState,memo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, settitle] = useState("harsh")

  function updateTitle(){
    settitle("my name is " + Math.random())
  }

  return (
    <div>
      <button onClick={updateTitle}>update the title</button>
      <Headers title={title}></Headers>
      <Headers title="hello1"></Headers>
      <Headers title="hello2"></Headers>
      <Headers title="hello3"></Headers>
    </div>
  )
}
//memo:-let you skip re-renderring a component when its props are unchanged
const Headers = memo(function ({title}){
  return <div>
   Hi {title} 
  </div>
})

export default App
