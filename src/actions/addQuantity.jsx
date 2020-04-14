import { ADD_QUANTITY } from './types'

export const addQuantity = (id) => {
  return(dispatch) => {
    dispatch({
      type: ADD_QUANTITY,
      payload: id
    }) 
  }
}
