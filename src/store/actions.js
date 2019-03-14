export const updateRawData = (payload) => {
  return {
    type: "UPDATE_RAW_DATA",
    payload: payload
  }
}

export const updateD3Data = (payload) => {
  return {
    type: "UPDATE_D3_DATA",
    payload: payload
  }
}