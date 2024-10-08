import { useEffect, useState } from 'react'
import './App.css'

function App() {

let [counter,setCounter]=useState(15);
let [color,setColor]=useState('white');

useEffect(()=>{
  console.log(color);
},[color]);
const changeTheme=()=>{
  if(color=='white'){
    setColor('black');
    document.body.style.backgroundColor=color;  }
else{setColor('white');
    document.body.style.backgroundColor=color;}
}
const removeValue=()=>{
  if(counter==0){
    setCounter(0);
  }
  else
  setCounter(counter-1);
}
const addValue=()=>{
  setCounter(counter+1);
}
  return (
    <>
      <h1>Counter value: {counter}</h1>
      <br />
      <br />
      <button onClick={addValue}>Increment</button> <t/>
      <button onClick={removeValue}>Decrement</button>
      <br />
      <br />
      <button onClick={changeTheme}>Change background Color</button>
    </>
  )
}

export default App
