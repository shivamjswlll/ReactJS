import React, { useEffect, useState,useRef } from 'react'

function Ref() {
    const [value,setValue]=useState(0);
    const count=useRef(0);
    console.log(count);

    useEffect(()=>{
        count.current=count.current+1;
    })

  return (
    

    <>
    <button onClick={()=>{setValue(prev=>prev+1)}}>increment</button>
    <h1>{value}</h1>
    <button onClick={()=>{setValue(prev=>prev-1)}}>decrement</button>
    <h1>Render count is {count.current}</h1>
    </>
  )
}

export default Ref