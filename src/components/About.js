import React from 'react'

const About = () => {

  return (
  <section id='about'>
    <div className='container animated bounceInUp' style={{marginTop: '50px'}}>
        <h1 className="has-text-weight-bold is-size-2 column" style={{marginBottom: '20px'}}>About.</h1>
        <div className='columns'>
          <div className='column is-offset-1 is-size-3'>
            I am a web based software developer with 2+ years of experience specializing in building high quality web-apps. Being a recent graduate from Wilfrid Laurier University (Waterloo Ontario), I obtained degrees in Computer Science (BSc) and Business Administration (BBa), while partaking in Laurier's prestigious co-op program. I am seeking a software development position which will challenge me to solve complex problems and allow for me to apply my knowledge while growing as a professional.
          </div>
          </div>
          <br/>
          <div className='columns'>
            <div className='column is-offset-1 is-half'>
              <p className='is-size-5'>
                practice
              </p>
              <br/>
              <p className='is-size-4'>Web + mobile development / UI & UX / Wire Framing / Database Design / Cloud Services</p>
            </div>
            <div className='column is-half'>
              <p className='is-size-5'>
                technology
              </p>
              <br/>
              <p className='is-size-4'>ReactJS / NodeJS / WebSockets / WebRTC / Stripe / Java / Python / NoSQL / SQL</p>
            </div>
        </div>
    </div>
  </section>
)
}

export default About