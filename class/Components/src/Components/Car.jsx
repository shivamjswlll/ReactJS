import React from 'react'
import { useState } from 'react'

function Car() {
    const [temp,settemp]=useState(false);
    const [kar,setKar]=useState({
        color:"yellow",
        brand: "XUV 700",
        year: "2014"
    })
    function updatakar() {
        if(temp==false){
            settemp(true);
        setKar(prevState => ({
            ...prevState, 
            color: "black"
        }))}
        else{
            settemp(false);




            
            setKar(prevState=> ({
                ...prevState,
                color: "yellow"
            }))

        }
    }
  return (
    <>
    <h2>My car Name is {kar.brand}</h2>
    <h2>My car Colour is {kar.color}</h2>
    <h2>Year of car model is {kar.year}</h2>
    <button onClick={updatakar}>Submit</button>
    </>
  )
}

export default Car