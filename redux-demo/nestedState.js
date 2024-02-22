const redux = require("redux");
const createStore = redux.legacy_createStore;
const { produce } = require("immer");

const initalState = {
  name: "Senthil",
  address: {
    street: "no 53 Astalakshi Nagar",
    city: "Ariyalur",
    state: "Tamilnad",
  },
};

//Action
const UPDATE_STREET = "UPDATE_STREET";

//Action creators
const updateStreet = (str) => {
  return {
    type: UPDATE_STREET,
    payload: str,
  };
};

// reducer

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_STREET:
      /* return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };*/

      // we can directly mutuate the object
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

// store

const store = createStore(reducer);
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(updateStreet("New street Changed"));
console.log("Final State", store.getState());

unsubscribe();
