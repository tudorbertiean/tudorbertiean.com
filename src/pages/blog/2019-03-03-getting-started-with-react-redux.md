---
templateKey: blog-post-redux
pageType: blog
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

Simply put, Redux is used to add a layer of complexion to some Javascript framework's state management system. In React in specific, it helps solve issues related to unidirectional data flow and local state management. It utilizes a single source of truth, a central location that controls a global state. It essentially acts as the brain of your application's state, taking information in, creating actions, and modifying information. 

Redux was created by [Dan Abramov](https://github.com/gaearon) and Andrew Clark. Do a quick scan of Dan's Github repositories and you will quickly see the brilliance of the mind behind Redux. 

# Why Redux?

Let's say you have two views on opposite sides of the React component hierarchy that need share some data. Think of some ways you can implement state management for this situation. One way would be to pass along props in a top down fashion from the nearest shared parent in the hierarchy. These props would have to pass down the data being mutated, and pass up the functions that mutate the data. This may not be a problem at first, but as the component tree becomes more and more complex, you may soon start pulling out your hairs. Having to keep track of all of these levels and props can get out of hand real quick and turn your code base into an uncontrollable mess. Redux steps in by allowing you to create a singleton structure which handles all required data mutations and allows you to incorporate this data in any view as needed.

# Terminology

Throughout this tutorial, you will see these specific terms:

* View - views are the react component that display data and allows for user interaction
* Action - actions are dispatched to alter the global state of the application
* Reducer - reducers "reduce" a previous state and action to create a new state
* Store - the singleton structure that maintains global state

![Redux Diagram](/img/redux-diagram.png)

The View obtains the initial state from the store. It then dispatches specific actions which are picked up and interpreted by the reducer to create a new state. This new state is placed into the store, and the store lets all of the subscribed views that there has been a change of state. Simple right!

# Implementation

For this implementation you will need to install two libraries into your project: `redux` and `react-redux`.

To start off, lets create the reducer and the store. Create a file in your project called `createStore.js`, I placed mine into a new folder named 'state', which works fine for this simple example but you will want to create a better directory structure as your project grows in complexity.

```javascript
import { createStore } from "redux"

const reducer = (state, action) => {
  switch(action.type){
    case `INCREMENT`: {
      return Object.assign({}, state, {
        count: state.count + 1,
      })
    }
    default: return state;
  }
}

const initialState = { count: 0 }

const store = () => createStore(reducer, initialState)
export default store
```

Import the `createStore` function from redux that will create the store for you with your reducer, and the initial state. It is important to note that with redux, you only create one store. You will eventually need to use multiple reducers so you can use `combineReducers` in that instance.

The reducer takes the current state and dispatched action as a parameter, and it returns either the same state, or a new state object. This is because the state in the store is immutable, you may not directly edit it. 

Inside the reducer, we need to detect what action was provided and act accordingly. In this situation we have a switch statement and we check to see if the \`INCREMENT\` action was provided. If it was, use `Object.assign` to output a new state object based on the previous state's properties.

We now have our store initialized and we can connect it to our views. This next step will take place in the `CounterButton.js` file. I have dumbed it down to only show the react-redux code, but take in mind that you will need to import any other React related library and choose between a presentational or container component.

```javascript
import { connect } from "react-redux"

const MyComponent = ({count, increment}) => {
  return (
    <div>
      {count}
      <button onClick={increment}>Increment Counter</button>
    </div>
    )
}

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({ type: `INCREMENT` })
})

export default const CounterButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent)
```

Import `connect` from `react-redux` as you will export an instance of connect that is binded to your component. `connect()` takes in `mapStateToProps` and `mapDispatchToProps`, or it can take just one of them, depending on your needs. `mapStateToProps` essentially passes the state object from the store to your component via props, and `mapDispatchToProps` passes the action function to your component via props. `MyComponent` will now have the required access to the store.

Now we need to implement this same count state inside our Navbar. In a file `Navbar.js` we must `mapStateToProps` in order to listen to the same state used previously.

```javascript
import { connect } from "react-redux"

const Navbar = ({count}) => {
  return (
    <nav>{count}</nav>
  )
}
const mapStateToProps = ({ count }) => {
  return { count }
}

export default connect(
  mapStateToProps
)(Navbar)
```

As you can see we only needed `mapStateToProps` in this situation as Navbar does not need to dispatch any actions. You now have a super basic working React Redux application!

Now I know that this tutorial was super simple, but it was intended for you to get a basic, first impression of Redux. As the complexity of your project grows, you will have many reducers and actions to manage so your project structure must support this. Some tips would be to place each reducer into their own folders related to views, and bring them all together in one central store file. You should also create a constants file which contains all of your action strings. It will help keep your code clean and if an action name changes, you will only have to change it in one place compared to in every view that references it.

I would also recommend you try out more complex examples as this one barely scratches the surface. Get familiar with all the given tools of react-redux and do some research to see if you even need to use Redux. Often times projects implement Redux from the beginning and down the road they realize that Redux has only added a level of complexion to their project which isn't even needed. Also, don't forget about local state in React! Not everything should go into the global state of Redux, stick to the fundamentals and use React's local state as needed.

Watch this [video](https://www.youtube.com/watch?v=xsSnOQynTHs) by Dan Abramov to learn more about the history of how Redux came to be.

Thanks for tuning in! I hope you learned something.
