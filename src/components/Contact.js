import React from 'react'

const Contact = () => {

  return (
  <section id='contact'>
    <div className='container animated bounceInUp' style={{marginTop: '80px'}}>
      <h1 className="has-text-weight-bold is-size-2 column" style={{marginBottom: '20px'}}>Contact.</h1>
      <div className='columns'>
        <div className='column is-offset-1 is-one-third'>
          <p className='is-size-5'>
            location
          </p>
          <br/>
          <p className='is-size-4'>Halton Hills, Ontario, Canada</p>
        </div>
        <div className='column is-one-third'>
          <p className='is-size-5'>
            get in touch
          </p>
          <br/>
          <p className='is-size-4'>tudorbertiean@hotmail.com</p>
        </div>
        <div className='column is-one-third'>
          <p className='is-size-5'>
            follow
          </p>
          <br/>
          <p className='is-size-2'><a style={{marginRight: '20px', color: 'white'}} href="https://ca.linkedin.com/in/tudorbertiean"><i className="fab fa-linkedin"></i></a>
          <a style={{color: 'white'}} href="https://github.com/tudorbertiean"><i className="fab fa-github"></i></a>
          </p>
        </div>
      </div>
    </div>
  </section>
)
}

export default Contact