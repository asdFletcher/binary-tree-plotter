export const updateD3Data = (payload) => {
  return {
    type: "UPDATE_D3_DATA",
    payload: payload
  }
}

export const updateNodeCount = (payload) => {
  return {
    type: "UPDATE_NODE_COUNT",
    payload: payload
  }
}

export const toggleNumbers = () => {
  return {
    type: "TOGGLE_NUMBERS",
  }
}