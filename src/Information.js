import React from 'react'
import { Link } from 'react-router-dom';

function Information({form}) {
  return (
    <div>
        <h3>Name:  {form.name}</h3>
        <p>City: {form.city}</p>
        <p>Birthday: {form.birthday}</p>
        <p>Color: {form.color}</p>
        <p>Address: {form.address}</p>
        <Link to="/"><button>Back</button></Link>
    </div>
  )
}

export default Information