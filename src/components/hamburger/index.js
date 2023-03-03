import React from 'react';
import '../hamburger/style.css';
import {
  Link
 } from "react-router-dom";

function Hamburger() {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div>
            
          </div>
          </div>
          <div className="menu">
            <div>
            <div>
                <ul>
                <li><Link to="/home">HOME</Link></li>
                  <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/projects">PROJECTS</Link></li>
                  <li><Link to="/contact">CONTACT</Link></li>
                </ul>
               </div>
             </div>
            </div>
         </div>
  );
}

export default Hamburger;
// import React, { useState } from 'react';

// function Hamburger() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="hamburger-menu">
//       <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={handleClick}>
//         <span className="line"></span>
//         <span className="line"></span>
//         <span className="line"></span>
//       </div>
//       <nav className={`menu ${isOpen ? 'open' : ''}`}>
//         <ul>
//           <li><a href="#about">About</a></li>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Hamburger;
