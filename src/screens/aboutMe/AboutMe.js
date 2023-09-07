import React from 'react';
import './aboutMe.css';
import person from '../../images/person.png';

function AboutMe() {
  return (
    <div className='about_container' id='about-me'>
      <div>
        <img src={person} alt='person icon' />
      </div>
      <div className='about_text'>
        <h1>ABOUT ME</h1>
        <p>My name is Khatia, 22, still a student, looking for a part time job I can do while still at school, ideally working remotely. I’m skilled with PHP and Java, and I am trying to learn other programming languages, step by step. I try to get the most out of my time at the college, and have some edge once I graduate, which is the primary reason why I seek a part time job with you.</p>
      </div>
    </div>
  )
}

export default AboutMe
