import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { connect } from "react-redux"

export const ReduxBlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  count,
  increment,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div style={{marginBottom: '10px'}}>
              <p>Count: {count}</p>
              <button onClick={increment}>Increment</button>
            </div>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                {tags.map(tag => (
                  <Link to={`/tags/${kebabCase(tag)}/`}>
                    <div className='tag is-link is-medium' style={{margin: '4px', }}>
                      {tag}
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

ReduxBlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const ReduxBlogPost = class extends React.Component {
  componentWillUnmount(){
    this.props.clear()
  }

  render() {
    const { markdownRemark: post } = this.props.data
    return (
      <Layout isBlog={true}>
        <ReduxBlogPostTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          helmet={
            <Helmet
              titleTemplate="%s | Blog"
            >
              <title>{`${post.frontmatter.title}`}</title>
              <meta name="description" content={`${post.frontmatter.description}`} />
            </Helmet>
          }
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
          count={this.props.count}
          increment={this.props.increment}
        />
      </Layout>
    )}
}

ReduxBlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
  count: PropTypes.number,
  increment: PropTypes.func
}

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({ type: `INCREMENT` }),
    clear: () => dispatch({ type: `CLEAR` }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxBlogPost)


export const pageQuery = graphql`
  query ReduxBlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`