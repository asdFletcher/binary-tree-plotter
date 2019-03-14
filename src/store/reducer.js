const initialState = {
  d3Data: {
    "name": "Top Level",
    "parent": "null",
    "children": [
      {
        "name": "Level 2: A",
        "parent": "Top Level",
        "children": [
          {
            "name": "Son of A",
            "parent": "Level 2: A"
          },
          {
            "name": "Daughter of A",
            "parent": "Level 2: A"
          }
        ]
      },
      {
        "name": "Level 2: B",
        "parent": "Top Level"
      }
    ]
  },
  rawData: {

  }
};

const store = (state = initialState, action) => {
  let { type, payload } = action;
  switch(type) {
    case "UPDATE_RAW_DATA": {
      const newState = {
        ...state,
        rawData: payload,
      }
      return newState;
    }
    case "UPDATE_D3_DATA": {
      const newState = {
        ...state,
        d3Data: payload,
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default store;