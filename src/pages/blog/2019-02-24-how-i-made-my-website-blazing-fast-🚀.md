---
templateKey: blog-post
pageType: "blog"
title: "Optimizing my website to be blazing fast  \U0001F680"
date: 2019-02-25T21:55:43.045Z
description: Custom portfolio website and blog built with GatsbyJS
tags:
  - GatsbyJS
  - React
  - JAMstack
  - Netlify
---
I recently arrived at a problem. This problem entailed updating my personal portfolio website from the bland, boring, generic Bootstrap theme to something more dynamic and impressive. I wanted a solution that was blazing fast compared to my previous website and to many other portfolio websites. I also wanted to integrate a blog and preferably a CMS in which I can manage blog posts and other data components on the site. To top it off, I need a solution that enables me to quickly push live changes without having to use a FTP web hosting solution or custom web hooks.

# Solution Search

One of the first frameworks I had in mind was [Jekyll](https://jekyllrb.com/). Although it is a promising framework, it wasn't quite what I was looking for. It allows for static blog generation using markdown files, and free deployment with Git Pages, but what threw me off is that it is a framework built on Ruby. I have nothing against Ruby, but I would much rather find a solution using JavaScript, and in more particular React so that I can continue improving upon my React skills and experience.

This then led me to [Next.js](https://nextjs.org/). Although I've been meaning to learn Next.js due to its brilliance in easily creating optimized React websites, there was no prebuilt solution to create and maintain a blog. It had what I was looking for with server side rendering, code splitting, and simple client-side routing, but not enough for what I had in mind.

And then I came across [GatsbyJS](https://www.gatsbyjs.org/). In my eyes, this is the holy grail. Gatsby is a static site generator which integrates many of the performance optimization techniques that I was looking for. There are many starter themes and plugins to allow me to easily integrate a blog alongside my portfolio.

# GatsbyJS

What I was first intrigued by was the simple fact that Gatsby was powered by React. This was a great chance to rebuild my website in React to further my knowledge in the framework and utilize many tools associated with it. 

Gatsby is based on JAMstack principles which is a modern web development architecture that relies on JavaScript, API's, and Markup. This enables my portfolio and blog to be prebuilt at deploy time to ensure that performance is not an issue, even on weaker connections. Gatsby also has many plugins to choose from and a very strong developer community, so I figured that this was the perfect solution for my needs. 

After reading the documentation and some sample projects, I begin redesigning and implementing my new website.

# Implementation

Although I won't be going through the entire coding process, I will outline some aspects of Gatsby such as creating dynamic pages.

One of the great things about Gatsby is the fact that it allows for you to dynamically create pages based on your needs. In my situation, I have a single page which contains my portfolio website, and then a page which contains my blog. This is further broken down into each blog post created being on a page of its own. 

To account for this, Gatsby implemented a `createPages` API which resides inside of `gatsby-node.js`. In this file you may create all of your pages dynamically and it beings with making a GraphQL query to retrieve all of the markdown files detected. I sourced my file system for these files, but you may also import data from any other RESTful API, or CMS like Wordpress for example.

GraphQL Query:

```javascript
 {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            tags
            templateKey
          }
        }
      }
    }
  }
```

With this query, we get a promise with every single markdown file that is places inside the `/pages` folder. The edges are the markdown files and their corresponding data which is extracted to the variable posts.

The `createPage` API is called and you can pass in the component, which contains the template based on your React class that is used to display the data in whichever way you choose. It is important to note that the context object inside `createPage` plays a key role. It allows us to pass along any extra data to the page such as its id so that we can then easily query the data inside the template class based on the unique ids.

```javascript
posts.forEach(edge => {
  const id = edge.node.id
  createPage({
    path: edge.node.fields.slug,
    tags: edge.node.frontmatter.tags,
    component: path.resolve(
      `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
    ),
    context: {
       id,
    },
  })
})
```

Inside the template file, a query is made to obtain all of the data regarding the blog post. Gatsby magic comes into play by passing this file the unique id that was planted while creating the page.

```javascript
query BlogPostByID($id: String!) {
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

```

I now have the data required to display this blog post with the html field and the metadata which is stored in the frontmatter. The data is then passed as a prop into the React component, styled to my liking.

This was an example about how dynamic blog creation works, but I also used a similar format to store data about my portfolio projects and their images.

# Deployment

One of the main criteria in choosing a framework was ease of deployment. Gatsby works well with deployment platform [Netlify](https://www.netlify.com/). With the use of Github, every time I commit and push new changes, Netlify's continuous deployment is alerted and begins the process of fetching the changes on GitHub and deploying the new website. Netlify also has a library [Netlify CMS](https://www.netlifycms.org/) that contains a markdown editor where I can create, modify, and delete my blog posts.

# Results

Through this process, I was able to experiment with a new framework while improving my React skills. It exposed me to start using GraphQL to create smarter, more flexible components. This is what created my website as it is today, and I'm looking forward to what new frameworks come out in the future that prompt me to redesign once again.
