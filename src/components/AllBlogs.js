import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class AllBlogs extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    return (
      <div className="columns is-multiline">
      {posts && (posts
          .map(({ node: post }) => (
            <Link className="is-parent column is-5"
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
    );
  }
}

AllBlogs.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query AllBlogsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { pageType: { eq: "blog" } }}
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
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
      <AllBlogs data={data} count={count} />
    )}
  />
)