import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class PortfolioBlogs extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    return (
        <section id='blog'>
            <div className='container animated bounceInUp' style={{marginTop: '80px'}}>
                <h1 className="has-text-weight-bold is-size-2 column" style={{marginBottom: '20px'}}>Blog.</h1>
                <div className="columns is-multiline">
                    {posts && (posts.map(({ node: post }) => (
                        <Link className="is-parent column is-5 blog-article"
                          key={post.id} to={post.fields.slug}>
                              <article className="tile is-child box blog-entry">
                                  <div className="title has-text-info is-size-5">
                                      {post.frontmatter.title}
                                  </div>
                                  <span className="subtitle is-size-5 is-block blog-date">{post.frontmatter.date}</span>
                              </article>
                        </Link>
                    )))}
                </div>
                <Link className="has-text-info is-size-5" to='/blog'>
                    See all...
                </Link>
            </div>
        </section>
    );
  }
}

PortfolioBlogs.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query PortfolioBlogsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { pageType: { eq: "blog" } }}
        limit: 3
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <PortfolioBlogs data={data} count={count} />
    )}
  />
)