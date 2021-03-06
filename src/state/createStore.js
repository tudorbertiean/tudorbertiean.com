import { createStore } from "redux"

const reducer = (state, action) => {
  switch(action.type){
    case `INCREMENT`: {
      return Object.assign({}, state, {
        count: state.count + 1,
      })
    }
    case `CLEAR`: {
      return Object.assign({}, state, {
        count: 0,
      })
    }
    default: return state;
  }
}

const initialState = { count: 0 }

const store = () => createStore(reducer, initialState)
export default store