import React from 'react'
import { graphql, StaticQuery } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types'

const Portfolio = ({data}) => {
  const { title, projects } = data
  return (
    <section id='portfolio'>
        <div className='container'>
            <h1 className="has-text-weight-bold is-size-2" style={{marginBottom: '70px'}}>{title}</h1>

            {projects.map((project) => {
              return (
              <div key={project.name} className='columns'>
                <div className='column is-5'>
                  <div className='is-size-5'>{project.service}</div>
                  <div className='is-size-2'>{project.name}</div>
                </div>

                <div className='column is-7'>
                <Carousel width='100%'>
                  {project.images.map((img) => {
                    return (
                      <div key={img.src.childImageSharp.fluid.src}>
                        <img src={img.src.childImageSharp.fluid.src} alt={img.src.childImageSharp.fluid.src}/>
                        <p className='legend'>{img.legend}</p>
                      </div>
                    )
                  })}
                  </Carousel>
                </div>
              </div>)
            })}
        </div>
      </section>
  )
}

Portfolio.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape({
      service: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        legend: PropTypes.string,
      })).isRequired,
    })),
  }),
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "portfolio-page" } }}
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                projects {
                  service
                  name
                  images {
                    src {
                      childImageSharp {
                        fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_noBase64
                        }
                      }
                    }
                    legend
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Portfolio data={data.allMarkdownRemark.edges[0].node.frontmatter} {...props} />}
  />
)