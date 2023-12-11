import React, { useEffect, useState } from 'react';
import './ContactPage.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email,setEmail] = useState("");
  const [message, setMessage] = useState(""); 
  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("contact-response").innerHTML = `Thanks, ${name}! We will get back to you via email: ${email}. Your message to us was: ${message}`;
  }

  useEffect(() => {
    document.title = "React Weather | Contact"
  }, []);

  return (
    <div className="app">
      <h1>Contact Us</h1>
      <div className="text-content">
        <div>
          <p>Contact us if you have questions:</p>
        
        </div>
        <form onSubmit={handleSubmit}>
          {/* collects name */}
          <label>Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          {/* collects email */}
          <label>Enter your email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {/* collects message */}
          <label>Enter your message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>

          <input type="submit" />
        </form>
        <p id="contact-response"></p>
        <div>Connect with us on LinkedIn</div>
        <div>
        <ul className = "linkedin-links">
              <li> <a href='https://www.linkedin.com/in/brady-buttrey-2b873a140/'>Brady Buttrey</a> </li>
              <li><a href = ''>Farah</a></li>
              <li> <a href = 'https://www.linkedin.com/in/james-miller-649768222/'>James Miller</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact;
