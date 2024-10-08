import React, { useState } from 'react'

function States() {
    const [color,setColor]=useState("Grey");
    const [brand,setBrand]=useState("Breeza");
    const [model,setModel]=useState("2022");
    const [company,setCompany]=useState("Hyundai");
  return (
    <>
    <h1>{color}</h1>
    </>
  )
}

export default States