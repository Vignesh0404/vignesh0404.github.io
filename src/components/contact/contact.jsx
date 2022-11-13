import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className='contact container section' id='contact'>

      <h3 className='contact_desc'>Feel free to connect on social media.</h3>
      <div className="socials_contact">
        <a href="https://github.com/Vignesh0404" className="button button--flex" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github"></i>
        </a>

        <a href="#contact" className="button button--flex" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-facebook"></i>
        </a>

        <a href="https://www.instagram.com/vickx_10/" className="button button--flex" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="https://www.linkedin.com/in/vignesh-s-a03a89179/" className="button button--flex" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </section>
  )
}

export default Contact