// import React, { useEffect, useState } from 'react';
// import './ContactPage.css';
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://spwzxcljfgjkxxeyzdej.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwd3p4Y2xqZmdqa3h4ZXl6ZGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzMDI2NzUsImV4cCI6MjAxNzg3ODY3NX0.Wq80rHctT-nJNMZsnqJPGhVPgHCl_ZGvIzStvgYpkVQ'
// const supabase = createClient(supabaseUrl, supabaseKey);

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Insert data into Supabase table
//       const { data, error } = await supabase
//       // table name
//         .from('Contact') 
//         .upsert([
//           { name, email, message },
//         ]);

//       if (error) {
//         throw error;
//       }

//       // Display success message or redirect to a thank you page
//       document.getElementById("contact-response").innerHTML = `Thanks, <i>${name}!</i> <br>  We will get back to you via email at <i>${email}</i>. `;
//     } catch (error) {
//       console.error('Error submitting form:', error.message);
//       document.getElementById("contact-response").innerHTML = 'An error occurred while submitting the form.';
//     }
//   };

//   useEffect(() => {
//     document.title = "React Weather | Contact";
//   }, []);

//   return (
//     <div className="app">
//       <h1 id="Page-Title">Contact Us</h1>
//       <div className="text-content-form">
//         <div>
//           <p>Contact us if you have questions:</p>
//         </div>
//         <form onSubmit={handleSubmit}>
//           {/* collects name */}
//           <label>Enter your name:
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//           {/* collects email */}
//           <label>Enter your email:
//             <input
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
              
//             />
//           </label>

//           {/* collects message */}
//           <label>Enter your message:
//             <textarea
//               id="message-textArea"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </label>

//           <input type="submit" id= 'contact-submit' />
//         </form>
//         <p id="contact-response"></p>
//         <div className='Connect-container'>
//           <p id="connect-message">Connect with us on LinkedIn</p>
//           <hr id="LinkedinLink-Divider"></hr>
//         </div>

//         <div>
//           <ul className="linkedin-links">
//             <li> <a href='https://www.linkedin.com/in/brady-buttrey-2b873a140/'>Brady Buttrey</a> </li>
//             <li><a href=''>Farah Lname</a></li>
//             <li> <a href='https://www.linkedin.com/in/james-miller-649768222/?trk=contact-info'>James Miller</a></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;


import React, { useEffect, useState } from 'react';
import './ContactPage.css';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://spwzxcljfgjkxxeyzdej.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwd3p4Y2xqZmdqa3h4ZXl6ZGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzMDI2NzUsImV4cCI6MjAxNzg3ODY3NX0.Wq80rHctT-nJNMZsnqJPGhVPgHCl_ZGvIzStvgYpkVQ'; 
const supabase = createClient(supabaseUrl, supabaseKey);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simple validation
    if (!name || !email || !message.trim()) {
      alert('Please fill in all fields: Name, Email, and Message');
      return;
    }

    try {
      // Insert data into Supabase table
      const { data, error } = await supabase
        .from('Contact')
        .upsert([
          { name, email, message },
        ]);

      if (error) {
        throw error;
      }

      // Display success message or redirect to a thank you page
      document.getElementById("contact-response").innerHTML = `Thanks, <i>${name}!</i> <br>  We will get back to you via email at <i>${email}</i>. `;
    } catch (error) {
      console.error('Error submitting form:', error.message);
      document.getElementById("contact-response").innerHTML = 'An error occurred while submitting the form.';
    }
  };

  useEffect(() => {
    document.title = "React Weather | Contact";
  }, []);

  return (
    <div className="app">
      <h1 id="Page-Title">Contact Us</h1>
      <div className="text-content-form">
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
              id="message-textArea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>

          <input type="submit" id="contact-submit" />
        </form>
        <p id="contact-response"></p>
        <div className='Connect-container'>
          <p id="connect-message">Connect with us on LinkedIn</p>
          <hr id="LinkedinLink-Divider"></hr>
        </div>

        <div>
          <ul className="linkedin-links">
            <li> <a href='https://www.linkedin.com/in/brady-buttrey-2b873a140/'>Brady Buttrey</a> </li>
            <li><a href=''>Farah Lname</a></li>
            <li> <a href='https://www.linkedin.com/in/james-miller-649768222/?trk=contact-info'>James Miller</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
