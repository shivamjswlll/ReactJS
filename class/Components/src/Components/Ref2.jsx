import React, { useState } from 'react'

function Ref2() {
    const [input,setInput]=useState();
    const onCLick=()=>{
        input.innerHTML
    }
  return (
 
    
    <>
    <input type="text" value={input} style={{backgroundColor:color}} />
    {/* <button onClick={()=>setColor('green')}>click me</button> */}
    <button onClick={onCLick}>Add</button>
    </>
  )
}

export default Ref2k;