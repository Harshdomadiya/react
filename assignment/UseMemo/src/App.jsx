import { useState,useMemo } from 'react'
import './App.css'



function App() {

  const words = ["hi","my","name","is","for","to","random","word"];
  const totalines = 100;
  const All = [];
  for(let i=1;i<=totalines;i++){
    let sentence = "";
    for(let j=0;j<8;j++){
      //console.log(words[1])
      sentence +=(words[Math.floor(words.length * Math.random())]);
      sentence +=" ";
    }
    All.push(sentence);

  }
 // console.log(All);
  const [sentence, Setsentence] = useState(All)
  const [filter,SetFilter] =useState("")
 //console.log(sentence)
  const filterSentence = useMemo(()=>{
    return sentence.filter(x => x.includes(filter));
  },[sentence,filter])

  return (
    <div>
     
      <input type="text" onChange={(e)=>{
        SetFilter(e.target.value);
      }}></input>
      {filterSentence.map(word => <div>{word}</div>)}
     
    </div>
  )
}

export default App
