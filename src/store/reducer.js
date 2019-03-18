const initialState = {
  d3Data: {},
  nodeCount: 6,
  displayNumbers: true,
};

const store = (state = initialState, action) => {
  let { type, payload } = action;
  switch(type) {
    case "UPDATE_D3_DATA": {
      const newState = {
        ...state,
        d3Data: payload,
      }
      return newState;
    }
    case "TOGGLE_NUMBERS": {
      const newState = {
        ...state,
      }
      if(state.displayNumbers){
        newState.displayNumbers = false;
      } else {
        newState.displayNumbers = true;
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default store;