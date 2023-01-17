import React from 'react'
import { Link } from 'react-router-dom';

function Form({form, handleChange}) {
    return (
        <div>
            <form>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter name" />
                <select name="city" value={form.city} onChange={handleChange}>
                    <option value="">Select City</option>
                    <option value="Istanbul">Istanbul</option>
                    <option value="Kocaeli">Kocaeli</option>
                    <option value="Izmir">Izmir</option>
                    <option value="Antalya">Antalya</option>
                </select>
                <input type="date" name="birthday" value={form.birthday} onChange={handleChange} />
                <input type="color" name="color" value={form.color} onChange={handleChange} />
                <textarea name="address" cols="20" rows="5" placeholder="Enter your address" value={form.address} onChange={handleChange}></textarea>
                <Link to="/information"><button>Send</button></Link>
            </form>
        </div>
    )
}

export default Form