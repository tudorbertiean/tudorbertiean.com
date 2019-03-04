import React from 'react'
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const logoHash = {
  "rbc.png": "RBC",
  "freelance.png": "Freelance",
  "alias-logo.png": "Alias Apps",
  "manulife-logo.png": "Manulife"
}

const Experience = ({ logos }) => {
  return (
    <section id='experience'>
      <div className='container animated bounceInUp' style={{marginTop: '80px'}}>
        <h1 className="has-text-weight-bold is-size-2 column" style={{marginBottom: '20px'}}>Experience.</h1>

        <div className='columns is-centered'>
          {logos.map((logo) => {
            const { fluid } = logo.node.childImageSharp
            const name = logoHash[fluid.originalName]
            return (
              <div key={name} className='column is-offset-1 logo' style={{padding: 'inherit'}}>
                <p className="is-size-4 has-text-centered	">{name}</p><br/>
                <Img fluid={fluid} alt={name}/>
                <br/>
                <br/>
              </div>
          )})}
        </div>
      </div>
    </section>
  )
}
  


export default props => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        allFile(filter: {relativeDirectory: {eq: "logos"}}) {          
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 150) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Experience logos={data.allFile.edges} {...props}/>
    )}
  />
)