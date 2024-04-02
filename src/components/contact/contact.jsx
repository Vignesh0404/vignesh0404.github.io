import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className='contact container section' id='contact'>

      <h3 className='contact_desc'>Get in touch, you can call me Vick if my name is hard to pro·nounce</h3>
      <div className="socials_contact">
      <a href="mailto:vignesh.s@utexas.edu" className="button button--flex" target="_blank" rel="noopener noreferrer">
        <i class="fa-regular fa-envelope"></i>
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