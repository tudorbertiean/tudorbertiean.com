import React from 'react'
import { Link } from 'gatsby'
import { connect } from "react-redux"
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
   const { isBlog } = this.props
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
        {this.props.count > 0 && <p style={{marginTop: '10px', marginLeft: '50px'}}>{this.props.count}</p>}
        <div className="navbar-end has-text-centered">
          {!isBlog ? 
            <React.Fragment >
              <a className="navbar-item" href="#portfolio">
                Portfolio
              </a>
              <a className="navbar-item" href="#experience">
                Experience
              </a>
              <a className="navbar-item" href="#about">
                About
              </a>
              <a className="navbar-item" href="#blog">
                Blog
              </a>
              <a className="navbar-item" href="#contact">
                Contact
              </a>
            </React.Fragment>
            :
            <React.Fragment>
              <Link className="navbar-item" to='/'>
                Check out my portfolio!
              </Link>
            </React.Fragment>
          }
        </div>
        </div>
      </div>
    </nav>
  )}
}

const mapStateToProps = ({ count }) => {
  return { count }
}

export default connect(
  mapStateToProps
)(Navbar)