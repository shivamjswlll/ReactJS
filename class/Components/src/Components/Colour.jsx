import React, { useState } from 'react'

function Colour() {
    let [color,setColor]=useState('yellow');
  return (
    <div>
        <h1>My favourite color is {color}</h1>
        <button className='background-color-blue' onClick={()=>{
            setColor('blue');
        }}>Touch</button>
    </div>
  )
}

export default Colour