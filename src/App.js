import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import Button from "./Components/Button"
import Card from "./Components/Card"

function App() {

  const [country, setCountry] = useState(false)


  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/name/france").then(resultat => {
      setCountry(resultat.data[0])
      console.log(resultat.data[0]);
    })
  }, [])

  const getCountry = (country) => {
    axios(`https://restcountries.com/v3.1/name/${country}`).then(country => {
      setCountry(country.data[0])
    })
  }


  return (

    <div>
      <Button onClick={getCountry}>France</Button>
      <Button onClick={getCountry}>Brazil</Button>
      <Button onClick={getCountry}>Croatia</Button>

      {country ?
        <Card country={country} />
        : null
      }
    </div>
  )

}


export default App