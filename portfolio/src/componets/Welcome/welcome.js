import React from 'react';
import './welcome.css';
import { Link } from 'react-scroll';

const Welcome = () => {
  return (
    <section id="welcome">
      <div className="welcomeContent">
        <span className="hello">Howdy,</span>
        <span className="intro">My name is  <span className="introName">Rob</span> <br />and I am a Software Developer</span>
        <p className="introParagraph">Check out my resume below, let me know if I can assist in any projects. <br /> Enjoy looking at the rest of the website.</p>
        <Link><button className="btn"><img src="" alt="" />Resume</button></Link>
      </div>
      <img src="" alt="" className="backgroundImage" />
    </section>
  )
}

export default Welcome;
