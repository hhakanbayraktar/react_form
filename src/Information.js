import React from 'react'

function Information({form}) {
  return (
    <div>
        <h3>Name:  {form.name}</h3>
        <p>City: {form.city}</p>
        <p>Birthday: {form.birthday}</p>
        <p>Color: {form.color}</p>
        <p>Address: {form.address}</p>
    </div>
  )
}

export default Information