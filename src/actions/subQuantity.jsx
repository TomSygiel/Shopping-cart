import { SUB_QUANTITY } from './types'

export const subtractQuantity = (id) => {
  return(dispatch) => {
    dispatch({
      type: SUB_QUANTITY,
      payload: id
    })
  }
}