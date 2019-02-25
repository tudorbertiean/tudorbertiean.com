import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
  
  <nav className="navbar" role="navigation" aria-label="main-navigation">
    <div className="container">
      <div className="navbar-brand">
        <div className="navbar-item" title="Logo">
          <img src={logo} alt="Tudor" style={{ width: '180px' }} />
        </div>
        {/* Hamburger menu */}
        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" className="navbar-menu">
      <div className="navbar-end has-text-centered">
        <a className="navbar-item" href="#portfolio">
          Portfolio
        </a>
        <a className="navbar-item" href="#experience">
          Experience
        </a>
        <a className="navbar-item" href="#about">
          About
        </a>
        {/* <a className="navbar-item" href="#blog">
          Blog
        </a> */}
        <a className="navbar-item" href="#contact">
          Contact
        </a>
      </div>
      </div>
    </div>
  </nav>
  )}
}

export default Navbar
