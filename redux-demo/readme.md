## Three core concepts

Redux has three core concpets Store, Action, Reducer

Store - will hold the states of application
Action - Decripes the changes in the state of the application (what happened)
Reducer - Which actually carries out the state transition depending the action (Ties the store and actions together)

## Three Principles concepts

To translate all these concpets we need adhere to this principles

# First Principle:

> The state of your whole application is stored in an object tree with in a single store
> maintain our application state in a single object which would be managed by Redux store

tracking no of items
{
items: 10
}

# Second Principle:

> The only way to change state is to emit an action, an object describing what happened
> To update the state of you app, you need to let Redux know about that with an action
> Not allowed to direclty update the state

```
{
    type: BUY_CAKE
}
```

# Third Principle:

> To specify how the state tree is transformed by actions, you write pure #reducers#
> Reducer -> (previousState, Action) => newState

# Action

> The only way to communicate app can interact with store
> Carry some information from app to the redux store
> Its plain Javascript Object
> Have a type Property that indicates the type of action being performed
> The type property is typically defined as string constrain

```
const BUY_CAKE = 'BUY_CAKE';

{
    type: BUY_CAKE,
    info: 'First redux action'
}
```

# Action Creaters

> A function which returns action as object is called action creaters

```
function buyCake () {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
```

# Reducers

> Specify how the app's state changes in response to action sent to the store
> Function that accepts state and action as arguments and returns the next state of application

(previousState, action ) => newState

```
const initialState  = {
    numOfCakes : 10
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}
```

# Redux Store

> One store for the entire application
> Holds application state
> Allow access to state via getState()
> Allows state to update vis dispatch(action)
> Register listners vis subscribe(listner)
> Handles unregistring of listners via function returned by subscribe(listner)

```

import redux = require('redux');
const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE';

function buyCake () {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

const initialState  = {
    numOfCakes : 10
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}

const store = createStore(reducer)
console.log('Initial State',store.getState())
const unsubscribe = store.subscribe( ()=> console.log("upstated state", store.getState() ))
store.dispatch (buyCake())
store.dispatch (buyCake())
store.dispatch (buyCake())
unsubscribe();


output

Initial State { numOfCakes: 10 }
upstated state { numOfCakes: 9 }
upstated state { numOfCakes: 8 }
upstated state { numOfCakes: 7 }

```
