import React from 'react'

import Layout from '../../components/Layout'
import AllBlogs from '../../components/AllBlogs'
import Img from "gatsby-image"
import PropTypes from 'prop-types'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
        <Layout isBlog={true}>
            <section className="section">
            <div className="container">
                <div className="content">
                    <div
                        className="full-width-image-container margin-top-0"
                        style={{
                        backgroundImage: `url('/img/toronto.jpg')`,
                        }}
                    >
                        <h1
                        className="has-text-weight-bold is-size-1"
                        style={{
                            boxShadow: '0.5rem 0 0 #fffff, -0.5rem 0 0 #fffff',
                            backgroundColor: '#000',
                            opacity: '0.85',
                            color: 'white',
                            padding: '1rem',
                        }}
                        >
                        Welcome to my blog!
                        </h1>
                    </div>
                </div>
                <AllBlogs />
                </div>
            </section>
        </Layout>
    )
  }
}