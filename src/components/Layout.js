import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          
          <link rel="apple-touch-icon" sizes="180x180" href="/../img/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/../img/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/../img/favicon-16x16.png"/>
          <link rel="manifest" href="/../img/site.webmanifest"/>
          <link rel="mask-icon" href="/../img/safari-pinned-tab.svg" color="#5bbad5"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"/>

          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <Navbar />
        <div>{children}</div>
      </div>
    )}
  />
)

export default TemplateWrapper
