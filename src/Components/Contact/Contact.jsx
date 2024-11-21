import React from 'react'
import './contact.css'
import instaIcon from './asset/instagram.png'
import mailIcon from './asset/gmail.png'
import LinkedinIcon from './asset/linkedin.png'
import phoneIcon from './asset/phone.png'
import addressIcon from './asset/address.png'



const Contact = () => {
  return (
    <div>
        <section className="personal-info">
          <div className="contact-item">
            <img src={addressIcon} alt="Address Icon" />
            <p> Avitampilly House, PO Poomanghalam, Irinjalakuda, Kerala, 680688</p>
          </div>
          <div className="contact-item">
            <img src={mailIcon} alt="Email Icon" />
            <p> alby4645@gmail.com</p>
          </div>
          <div className="contact-item">
            <img src={instaIcon} alt="Instagram Icon" />
            <p> <a href="https://www.instagram.com/alby.abhi/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/alby.abhi/</a></p>
          </div>
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone Icon" />
            <p> +91 8129353001</p>
          </div>
          <div className="contact-item">
            <img src={LinkedinIcon} alt="LinkedIn Icon" />
            <p> <a href="https://www.linkedin.com/in/alby-ab-a35906268" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/alby-ab-a35906268</a></p>
          </div>
        </section>
    </div>
  )
}

export default Contact
