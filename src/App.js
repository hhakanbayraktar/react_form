import './App.css';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Information from './Information';

function App() {

  const [form, setForm] = useState({
    name: "",
    city: "",
    birthday: "",
    color: "",
    address: ""
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  return (
    <div className="App">
      <h2>Enter your information</h2>
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
      <Routes>
        <Route path="/" exact/>
        <Route path="/Information" element={<Information  form={form}/>} />
      </Routes>
    </div>
  );
}

export default App;
