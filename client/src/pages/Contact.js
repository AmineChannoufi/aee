import React from 'react'
//import './contact.css'
import Navigation from './Navigation';
function Contact() {
  return (
    <div id='contact' className='contact'>
         <Navigation />
      
      
         <form className="contact-form"   >

<h2 > contact us </h2>
<div className="form-content" >

    <input type="text"
        id="name"
        name="name"
        placeholder="name "
      

    />


    <input type="text"
        id="phone"
        name="phone"
        placeholder="phone "
     />


    <div className="email-content" >

        <label id="not-mail" > Email non valide </label> 
        
            <input type="mail"
            id="email"
            name="email"

            placeholder="email "
           />

    </div>

    < textarea id="message"
        name="message"

        placeholder="message "
       />
    <div><input className="button"
        type="button"
        value="Envoyer"
       /></div>

    <div className="form-message" ></div>
</div>
</form >
      
      
      </div>
  )
}

export default Contact