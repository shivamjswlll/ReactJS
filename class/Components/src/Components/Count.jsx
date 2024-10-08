import React, { useEffect, useState } from 'react'

function Count() {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count=> count+1);
        },1000)
    },[count])
  return (
    <div>Count</div>
  )
}

export default Count