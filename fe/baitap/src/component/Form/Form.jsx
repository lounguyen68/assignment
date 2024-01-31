import "./Form.css"; 
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log({name, email})
  }

  return (
    <div className="form">
      <label>Name:</label>
      <input type="text" className="name" value={name} onChange={(e) => setName(e.target.value)}/>
      <label>Email:</label>
      <input type="text" className="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Form