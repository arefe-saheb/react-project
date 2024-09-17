import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Message</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aut animi quidem similique suscipit facere asperiores, dignissimos corporis nihil facilis sapiente voluptate id pariatur assumenda illo quod totam! Inventore, autem.</p>
            <ul>
                <li>contactgreatstack@gmail.com</li>
                <li>+1 123-456-789</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
        </div>
        <div className="contact-col">
            <form >
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your Name' required/>
                <label>Your Number</label>
                <input type="number" name='phone' placeholder='Enter your Mobile' required/>
                <label>Write Your Message</label>
                <textarea name="message" rows="6"></textarea>
                <button type='submit' className='btn dark-btn'>submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact