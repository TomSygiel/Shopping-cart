import { REMOVE_PRODUCT } from './types'

export const removeProduct = (id) => {
  return(dispatch) => {
    dispatch({
      type: REMOVE_PRODUCT,
      payload: id
    })
  }
}
