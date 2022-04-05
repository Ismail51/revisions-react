import React from "react"
import { useState } from "react"
import { useEffect } from "react/cjs/react.production.min"

function App(){
  
  const[name, setName] = useState("")
  const[capital, setCapital] = useState("")
  const[flag, setFlag] = useState("")
  const[population, setPopulation] = useState("")
  const[region, setRegion] = useState("")
  
  useEffect(() => {

    
  })

  return ( 
    <h1>hello
      <p>{name}</p>
      <p>{capital}</p>
      <p>{flag}</p>
      <p>{population}</p>
      <p>{region}</p>
    </h1>
    
  )
  
}


export default App