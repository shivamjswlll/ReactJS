import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "Shivam",
    age: 20
  }

  return (
    <>
    <h1 className='bg-green-400 rounded-xl p-4 mb-4'>Tailwind test</h1>
    <Card username="" btnText="click me!"/>
    <Card username="Yash" btnText="press me"/>
    


      
    </>
  )
}

export default App
