---
templateKey: blog-post-redux
pageType: "blog"
title: Getting started with react-redux
date: 2019-03-03T21:55:43.045Z
description: Adding Redux to GatsbyJS static website
tags:
  - React
  - Redux
---
Click that increment button above and see what happens. If you see the counter being incremented both right above and inside the Navbar, then you are seeing Redux in action right in front of your eyes.

In this simple tutorial, I will go over what Redux is and demonstrate an implementation with React. By the end of this, you will hopefully see why so many React projects feel the need to implement Redux, and how to implement a basic example yourself.

# What is Redux?

Simply put, Redux is used to add a layer of complexion to Javascript framework's state management. In React in specific, it helps solve issues related to unidirectional data flow and local state management. It utilizes a single source of truth, a central location that controls a global state. It essentially acts as the brain of your application's state, taking information in, creating actions, and modifying information. 

Redux was created by [Dan Abramov](https://github.com/gaearon) and Andrew Clark. Do a quick scan of Dan's Github repositories and you will quickly see the brilliance of the mind behind Redux. 

# Why Redux?

Let's say you have two views on opposite sides of the React component hierarchy that need share some data. Think of some ways you can implement state management for this situation. One way would be to pass along props in a top down fashion from the nearest shared parent in the hierarchy. These props would have to pass down the data being mutated, and pass up the functions that mutate the data. This may not be a problem at first, but as the component tree becomes more and more complex, you may soon start pulling out your hairs. Having to keep track of all of these levels and props can get out of hand real quick and turn your code base into an uncontrollable mess. Redux steps in by allowing you to create a singleton structure which handles all required data mutations and allows you to incorporate this data in any view as needed.

# Terminology

Throughout this tutorial, you will see these specific terms:

* View - views are the react component that display data and allows for user interaction
* Action - actions are dispatched to alter the global state of the application
* Reducer - reducers "reduce" a previous state and action to create a new state
* Store - the singleton structure that maintains global state
