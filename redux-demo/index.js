const redux = require("redux");
const reduxLogger = require("redux-logger");

const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const createStore = redux.legacy_createStore;
const combineReducers = redux.combineReducers;

const bindActionCreators = redux.bindActionCreators;

const ORDER_CAKE = "ORDER_CAKE";
const RESTOCKE_CAKE = "RESTOCKE_CAKE";

const ORDER_ICECREAM = "ORDER_ICECREAM";
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM";

// Action creaters for Cakes
function orderCake(qty = 1) {
  return {
    type: ORDER_CAKE,
    payload: qty,
  };
}

function restockCake(qty = 1) {
  return {
    type: RESTOCKE_CAKE,
    payload: qty,
  };
}

// Action Creaters for Ice creams

function orderIcecream(qty = 1) {
  return {
    type: ORDER_ICECREAM,
    payload: qty,
  };
}

function restockIcecream(qty = 1) {
  return {
    type: RESTOCK_ICECREAM,
    payload: qty,
  };
}

// inital State
/* Initial state for cake and Icecream
const initialState = {
  numOfCakes: 10,
  numOfIcecreams: 20,
};

// Reducer for Cake & IceCream
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case RESTOCKE_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    case ORDER_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - action.payload,
      };
    case RESTOCK_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams + action.payload,
      };
    default:
      return state;
  }
};
*/

/**
 * Induvidual state and reducers
 */
const initiaStateOfCake = {
  numOfCakes: 10,
};

const initiaStateOfIceCream = {
  numOfIcecreams: 20,
};

const cakeReducer = (state = initiaStateOfCake, action) => {
  switch (action.type) {
    case ORDER_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case RESTOCKE_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = initiaStateOfIceCream, action) => {
  switch (action.type) {
    case ORDER_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - action.payload,
      };
    case RESTOCK_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
});

// Store
const store = createStore(rootReducer, applyMiddleware(logger));
//console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {});

// New way to dispatch  the ations creators
const action = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);

action.orderCake(2);
action.restockCake(5);

action.orderIcecream(2);
action.restockIcecream(5);
//console.log("Final State", store.getState());
unsubscribe();
/*
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(10));
*/
