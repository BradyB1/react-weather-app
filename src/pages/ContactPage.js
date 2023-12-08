import React, {useEffect, useState } from 'react';
import './ContactPage.css';

const Contact = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(`The name you entered was: ${name}`)
    document.getElementById ("contact-response").innerHTML =`Thanks, ${name}! We will get back to you soon`
  }

  useEffect(() => {
    document.title = "React Weather | Contact" }, []);

  return (
    <div className="app">
      <h1>Contact Us</h1>
      <div className= "text-content">
        <div>
          <p>Contact us if you have questions:</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Enter your name:
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
        <p id="contact-response"></p>
        <div>Connect with us on linkedIn</div>
      </div>
    </div>
  )
}

export default Contact;