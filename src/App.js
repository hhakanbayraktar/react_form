import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Information from './Information';
import Form from './Form';

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
      <Routes>
        <Route path="/" element={<Form form={form} handleChange={handleChange} />} exact />
        <Route path="/Information" element={<Information form={form} />} />
      </Routes>
    </div>
  );
}

export default App;
