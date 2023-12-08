import React, {useEffect} from 'react';
import './ContactPage.css';

const Contact = () => {

  useEffect(() => {
    document.title = "React Weather | Contact"   }, []);

  return (
    <div className="app">
      <h1>Contact Us</h1>
      <div className= "text-content">
        <div>
          <p>Contact us if you have questions:</p>
          <br></br>
        </div>
      </div>
    </div>
  )
}

export default Contact;