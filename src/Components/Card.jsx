import React from 'react'
import Button from './Button'

export default function Card(props) {
  console.log(props);
  return (
    <div>
        <p>{props.country.name.common}</p>
        <p>{props.country.capital}</p>
        <img src={props.country.flags.png} alt="drapeau" />
        <p>{props.country.population}</p>
        <p>{props.country.region}</p>
    </div>
  )
}
