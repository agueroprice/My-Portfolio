import React from 'react';
import './header.css'
import Typed from 'react-typed';


function Header() {
  return (
    <div className='main-info'>
      <h1>What am I</h1>
      <Typed className='loop-word'
        strings={[
            " ", 
          "A Software Engineer", 
          "Also known as an",  
          "Full stack developer", 
          "Or!", 
          '"a coder"', 
          " ", 
          " "]}
            typeSpeed={40}
            backSpeed={50}
            loop
      />
    </div>
  )
}

export default Header
