import React from 'react'
import Layout from '../components/Layout'
import Portfolio from '../templates/portfolio-page'
import Experience from '../components/Experience'
import About from '../components/About'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Img from "gatsby-image"
import PropTypes from 'prop-types'


export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    return (
      // Include the header display followed by each component of the page
      <Layout>
        <section className="section" style={{height: '100vh'}}>
          <div className="intro columns">
            <div className="column">
              <h1 className="has-text-weight-bold is-size-2 column has-text-centered">Full-Stack Web Developer</h1>
            </div>
            <div className="column">
              <Img fluid={data.file.childImageSharp.fluid} alt='Header Image'/>
            </div>
          </div>
          <div className="columns is-mobile">
            <div className="column is-full has-text-centered">
              <a href='#portfolio' className='read-more'>
              See More<br/>
              <i className="fas fa-angle-double-down"></i>
              </a>
            </div>
          </div>
        </section>
        <Portfolio/>
        <Experience/>
        <About/>
        <Contact/>
        <Footer/>
      </Layout>)
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
}

export const query = graphql`
  query {
    file(relativePath: { eq: "undraw_operating_system_4lr6.png" }) {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 540) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
