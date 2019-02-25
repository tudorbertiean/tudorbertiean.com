import React from 'react'
import rbc from '../img/rbc.png'
import alias from '../img/alias-logo.png'
import manulife from '../img/manulife-logo.png'
import freelance from '../img/freelance.png'

const logos = [
{
  name: 'Freelance',
  image: freelance
},
{
  name: 'RBC',
  image: rbc
},
{
  name: 'Manulife',
  image: manulife
},
{
  name: 'Alias Apps',
  image: alias
}
]

const Experience = () => {
  return (
    <section id='experience'>
      <div className='container animated bounceInUp' style={{marginTop: '80px'}}>
        <h1 className="has-text-weight-bold is-size-2 column" style={{marginBottom: '20px'}}>Experience.</h1>

        <div className='columns is-centered'>
          {logos.map((logo) =>
            <div key={logo.name} className='column is-offset-1 logo' style={{padding: 'inherit'}}>
              <p className="is-size-4 has-text-centered	">{logo.name}</p><br/>
              <img className='logo is-centered' src={logo.image} alt={logo.name}/>
              <br/>
              <br/>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Experience
