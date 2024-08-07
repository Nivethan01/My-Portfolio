import React from 'react';
import './Hero.css';
import profile from '../../assets/Nivethan.jpg';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='hero' className='hero'>
      <img className='hero' src={profile} alt="Profile" />
      <h1><span>I'm Nivethan,</span> Web developer from India</h1>
      <p className='para'>I am a fresher, energetic web developer</p>
      <div className='hero-action'>
        <div className='hero-connect' onClick={scrollToContact}>Connect with me</div>
        <a href="https://docs.google.com/document/d/1D7MEO7SuECQFfCPDcNvY4GEY2e8xeHbK/edit?usp=drive_link&ouid=116243546086334950420&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className='hero-resume'>
          My resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
