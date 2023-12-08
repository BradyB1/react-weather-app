import React, {useEffect} from 'react';
import './ContactPage.css';

const Contact = () => {

  useEffect(() => {
    document.title = "React Weather | Contact"   }, []);

  return (
    <div className="app">
      <h1>Contact Page</h1>
      <div>
          <p>Contact us if you have questions:</p>
          <br></br>
        </div>
    </div>
  )
}

export default Contact;