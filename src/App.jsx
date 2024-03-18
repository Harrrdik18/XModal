import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [obj, setObj] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });
  // Submit Form Functionality
  function handleSubmit(e) {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!obj.email.match(emailRegex)) {
      alert("Invalid email. Please check your email address.");
    }

    if (obj.phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }

    if (new Date(obj.dob) > new Date()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    }

    setObj({ username: "", email: "", phone: "", dob: "" });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setObj({ ...obj, [name]: value });
  }

  return (
    <div className="model-wrapper">
      <h1>User Details Modal</h1>
      <button onClick={()=>setShowForm(true)}>Open Form</button>
      {showForm && (
        <>
        <div className="modal" onClick={()=>setShowForm(false)}></div>
        <form className="modal-content" onSubmit={handleSubmit}>
          <h1>Fill details</h1>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={obj.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={obj.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={obj.phone}
            onChange={handleChange}
          />
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={obj.dob}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        
        </>
      )}
    </div>
  );
}

export default App;