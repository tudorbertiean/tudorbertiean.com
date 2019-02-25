import React from 'react'
import timsCup from '../img/ehmoji-icon-cup.png'


const Footer = () => {
  return (
    <section>
        <hr/>
        <div className='container' style={{padding: '30px'}}>
            Made from scratch using GatsbyJS, Bulma, and a little help from <img width='45px' height='45px' src={timsCup} alt='Tims'/>.
        </div>
    </section>
)
}

export default Footer