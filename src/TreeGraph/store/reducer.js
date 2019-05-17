const initialState = {
  d3Data: {},
  numberOfNodes: 10,
  displayNumbers: true,
  treeType: 'RedBlackTree',
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
    case "UPDATE_TREE_TYPE": {
      const newState = {
        ...state,
        treeType: payload,
      }
      return newState;
    }
    case "UPDATE_NUM_NODES": {
      const newState = {
        ...state,
        numberOfNodes: payload,
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