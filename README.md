# Portfolio Website

## Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/db64f2d0-4bb0-4326-a3ea-d9ec344021ee/deploy-status)](https://app.netlify.com/sites/tudorbertiean/deploys)


## Overview

This repo contains my portfolio website that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Link](https://tudorbertiean.com/)**.

It used the **[gatsby-netlify-cms](https://gatsby-netlify-cms.netlify.com/)** template to integrate the minimal configuration settings and then completely redesigned from scratch using CSS library Bulma and Gatsby.

It follows the [JAMstack architecture](https://jamstack.org) by using Git, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)


### Access Locally
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ npm install
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

## Getting Started (Without Netlify)
```
$ gatsby new [SITE_DIRECTORY_NAME] https://github.com/netlify-templates/gatsby-starter-netlify-cms/
$ cd [SITE_DIRECTORY_NAME]
$ npm run build
$ npm run serve
```

### Setting up the CMS
Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.
