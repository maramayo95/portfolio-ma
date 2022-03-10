import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact-container">
        <h3 className="h3-contact">Get in Touch</h3>
        <form  className="form-contact">
                <input type="text" name="name" placeholder='Write your Name'/>


                <input type="text" name="phone" placeholder='Write your Phone'/>


                <input type="email" name="email" placeholder='Write your email'/>

                <textarea type="text" name="text-area" placeholder='Tell me more'/>            

            <button className="send">Send</button>
        </form>
    </div>
  )
}

export default Contact