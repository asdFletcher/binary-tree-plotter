export const updateD3Data = (payload) => {
  return {
    type: "UPDATE_D3_DATA",
    payload: payload
  }
}

export const updateNumNodes = (payload) => {
  return {
    type: "UPDATE_NUM_NODES",
    payload: payload
  }
}
export const updateTreeType = (payload) => {
  return {
    type: "UPDATE_TREE_TYPE",
    payload: payload
  }
}

export const toggleNumbers = () => {
  return {
    type: "TOGGLE_NUMBERS",
  }
}